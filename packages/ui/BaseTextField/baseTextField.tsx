import { FC } from 'react'
import { Controller, FieldErrors } from 'react-hook-form'
import { TextField, StandardTextFieldProps } from '@mui/material'

import { formatMessage } from '../CurrentLocale'

interface BaseTextFieldProps extends StandardTextFieldProps {
  name: string
  type?: string
  defaultValue?: string
  fullWidth?: boolean
  required?: boolean
  validate?: any
  control: any
  errors: FieldErrors
}

const BaseTextField: FC<BaseTextFieldProps> = ({
  control,
  errors,
  name,
  defaultValue,
  fullWidth = true,
  required = false,
  validate,
  type = 'text',
  ...rest
}: any) => {
  const controllerProps: any = {
    type,
    name,
    key: name,
    defaultValue,
    rules: {
      required: required && formatMessage({ id: 'global.required' }),
      validate
    },
    control
  }

  const textField: any = {
    type,
    name,
    key: name,
    fullWidth,
    required,
    ...rest
  }

  return (
    <Controller
      {...controllerProps}
      render={({ field }) => (
        <TextField
          {...field}
          {...textField}
          error={!!errors[name]}
          helperText={
            (errors as any)[name] ? (errors as any)[name].message : null
          }
        />
      )}
    />
  )
}

export default BaseTextField
