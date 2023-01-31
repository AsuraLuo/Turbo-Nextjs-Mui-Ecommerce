import { FC, useState, MouseEvent } from 'react'
import { Controller, FieldErrors } from 'react-hook-form'
import {
  InputAdornment,
  IconButton,
  TextField,
  StandardTextFieldProps
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { formatMessage } from '../CurrentLocale'

interface BasePasswordProps extends StandardTextFieldProps {
  name: string
  type?: string
  defaultValue?: string
  fullWidth?: boolean
  required?: boolean
  validate?: any
  InputProps?: any
  control: any
  errors: FieldErrors
}

const BasePassword: FC<BasePasswordProps> = ({
  control,
  errors,
  name,
  defaultValue,
  fullWidth = true,
  required = false,
  validate,
  InputProps = {},
  ...rest
}) => {
  const [type, setType] = useState<string>('password')

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

  const handleClickShowPassword = () => {
    setType((prev: string) => (prev === 'password' ? 'text' : 'password'))
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <Controller
      {...controllerProps}
      render={({ field }) => (
        <TextField
          {...textField}
          {...field}
          error={!!errors[name]}
          helperText={
            (errors as any)[name] ? (errors as any)[name].message : null
          }
          InputProps={{
            ...InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {type === 'password' ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      )}
    />
  )
}

export default BasePassword
