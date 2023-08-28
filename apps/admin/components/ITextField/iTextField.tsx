import { TextField, TextFieldProps } from '@mui/material'
import { Control, Controller, ControllerProps, FieldError, Path } from 'react-hook-form'
import type { ReactNode } from 'react'
import type { FieldValues } from 'react-hook-form/dist/types/fields'

import { useIFormError } from '../IFormError'

export type ITextFieldProps<T extends FieldValues = FieldValues> = Omit<TextFieldProps, 'name'> & {
  validation?: ControllerProps<T>['rules']
  name: Path<T>
  parseError?: (error: FieldError) => ReactNode
  control?: Control<T>
  component?: typeof TextField
}

const ITextField = <TFieldValues extends FieldValues = FieldValues>({
  validation = {},
  parseError,
  type,
  required,
  name,
  control,
  component: TextFieldComponent = TextField,
  ...rest
}: ITextFieldProps<TFieldValues>) => {
  const errorMsgFn = useIFormError()
  const customErrorFn: Function = parseError || errorMsgFn

  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  if (type === 'email' && !validation.pattern) {
    validation.pattern = {
      value:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email address'
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({ field: { value, onChange, onBlur, ref }, fieldState: { error } }) => {
        const message = typeof customErrorFn === 'function' ? customErrorFn(error) : error?.message

        return (
          <TextFieldComponent
            {...rest}
            name={name}
            value={value ?? ''}
            onChange={(ev) => {
              onChange(type === 'number' && ev.target.value ? +ev.target.value : ev.target.value)
              if (typeof rest.onChange === 'function') {
                rest.onChange(ev)
              }
            }}
            onBlur={onBlur}
            required={required}
            type={type}
            error={!!error}
            helperText={error ? message : rest.helperText}
            inputRef={ref}
          />
        )
      }}
    />
  )
}

export default ITextField
