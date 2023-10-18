import { createElement } from 'react'
import { MenuItem, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import type { ReactNode } from 'react'
import type { TextFieldProps } from '@mui/material'
import type { Control, ControllerProps, FieldError, Path } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form/dist/types/fields'

import { useIFormError } from '../IFormError'

export type IFormSelectItem = {
  id: string | number
  label: string | number
  disabled?: boolean
}

export type IFormSelectProps<T extends FieldValues> = Omit<
  TextFieldProps,
  'name' | 'type' | 'onChange'
> & {
  name: Path<T>
  options?: readonly IFormSelectItem[] | readonly any[]
  valueKey?: string
  labelKey?: string
  type?: 'string' | 'number'
  validation?: ControllerProps<T>['rules']
  objectOnChange?: boolean
  control?: Control<T>
  parseError?: (error: FieldError) => ReactNode
  onChange?: (value: any) => void
}

const IFormSelect = <TFieldValues extends FieldValues>({
  name,
  options = [],
  required,
  valueKey = 'id',
  labelKey = 'label',
  type,
  objectOnChange,
  validation = {},
  control,
  parseError,
  ...rest
}: IFormSelectProps<TFieldValues>) => {
  const errorMsgFn = useIFormError()
  const customErrorFn: Function = parseError || errorMsgFn
  const isNativeSelect = !!rest.SelectProps?.native
  const ChildComponent = isNativeSelect ? 'option' : MenuItem

  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      render={({ field: { onBlur, onChange, value, ref }, fieldState: { error } }) => {
        const message = typeof customErrorFn === 'function' ? customErrorFn(error) : error?.message
        // handle shrink on number input fields
        if (type === 'number' && typeof value !== 'undefined') {
          rest.InputLabelProps = rest.InputLabelProps || {}
          rest.InputLabelProps.shrink = true
        }

        value = value?.[valueKey] ?? value // try fetch key value

        return (
          <TextField
            {...rest}
            name={name}
            value={value ?? ''}
            onBlur={onBlur}
            onChange={(event) => {
              let item: number | string = event.target.value
              if (type === 'number' && item) {
                item = Number(item)
              }
              onChange(item)
              if (typeof rest.onChange === 'function') {
                if (objectOnChange) {
                  item = options.find((i) => i[valueKey] === item)
                }
                rest.onChange(item)
              }
            }}
            select
            required={required}
            error={!!error}
            helperText={error ? message : rest.helperText}
            inputRef={ref}
          >
            {options.map((item: any) =>
              createElement(
                ChildComponent,
                {
                  key: `${name}_${item[valueKey]}`,
                  value: item?.[valueKey] ?? item,
                  disabled: item?.disabled ?? false
                },
                item[labelKey]
              )
            )}
          </TextField>
        )
      }}
    />
  )
}

export default IFormSelect
