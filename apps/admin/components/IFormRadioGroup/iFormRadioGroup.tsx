import { Control, useController } from 'react-hook-form'
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  useTheme
} from '@mui/material'
import type { ChangeEvent, ReactNode } from 'react'
import type { FieldError, Path } from 'react-hook-form'
import type { FormControlLabelProps, FormLabelProps } from '@mui/material'
import type { FieldValues } from 'react-hook-form/dist/types/fields'

import { useIFormError } from '../IFormError'

export type IFormRadioItem = {
  label: string
  id: string | number
}

export type IFormRadioGroupProps<T extends FieldValues> = {
  name: Path<T>
  options: IFormRadioItem[] | any[]
  type?: 'number' | 'string'
  required?: boolean
  label?: string
  labelKey?: string
  valueKey?: string
  helperText?: ReactNode
  emptyOptionLabel?: string
  returnObject?: boolean
  row?: boolean
  disabled?: boolean
  control?: Control<T>
  labelProps?: Omit<FormControlLabelProps, 'label' | 'control' | 'value'>
  formLabelProps?: Omit<FormLabelProps, 'required' | 'error'>
  onChange?: (value: any) => void
  parseError?: (error: FieldError) => ReactNode
}

const IFormRadio = <TFieldValues extends FieldValues>({
  name,
  options,
  type,
  required,
  label,
  labelKey = 'label',
  valueKey = 'id',
  helperText,
  emptyOptionLabel,
  returnObject,
  disabled,
  row,
  control,
  labelProps,
  formLabelProps,
  parseError,
  ...rest
}: IFormRadioGroupProps<TFieldValues>) => {
  const theme = useTheme()
  const errorMsgFn = useIFormError()
  const customErrorFn: Function = parseError || errorMsgFn
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({
    name,
    rules: required ? { required: 'This field is required' } : undefined,
    control
  })
  const message = typeof customErrorFn === 'function' ? customErrorFn(error) : error?.message
  const parsedHelperText = error ? message : helperText

  const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const radioValue = (event.target as HTMLInputElement).value
    const returnValue = returnObject
      ? options.find((items) => items[valueKey] === radioValue)
      : radioValue
    // setValue(name, returnValue, { shouldValidate: true })
    onChange(returnValue)
    if (typeof rest.onChange === 'function') {
      rest.onChange(returnValue)
    }
  }

  return (
    <FormControl error={!!error}>
      {label && (
        <FormLabel {...formLabelProps} required={required} error={!!error}>
          {label}
        </FormLabel>
      )}
      <RadioGroup onChange={onRadioChange} name={name} row={row} value={value || ''}>
        {emptyOptionLabel && (
          <FormControlLabel
            {...labelProps}
            control={
              <Radio
                sx={{
                  color: error ? theme.palette.error.main : undefined
                }}
                checked={!value}
              />
            }
            label={emptyOptionLabel}
            value=""
          />
        )}
        {options.map((option: any) => {
          const optionKey = option[valueKey]
          if (!optionKey) {
            console.error(
              `CheckboxButtonGroup: valueKey ${valueKey} does not exist on option`,
              option
            )
          }
          let val = returnObject ? value[valueKey] : value
          if (type === 'number') {
            val = Number(val)
          }
          const isChecked = val === optionKey
          return (
            <FormControlLabel
              {...labelProps}
              control={
                <Radio
                  sx={{
                    color: error ? theme.palette.error.main : undefined
                  }}
                  disabled={disabled}
                  checked={isChecked}
                />
              }
              value={optionKey}
              label={option[labelKey]}
              key={optionKey}
            />
          )
        })}
      </RadioGroup>
      {parsedHelperText && <FormHelperText error={!!error}>{parsedHelperText}</FormHelperText>}
    </FormControl>
  )
}

export default IFormRadio
