import { FC, KeyboardEvent, WheelEvent } from 'react'
import { Controller, FieldErrors } from 'react-hook-form'
import { Button, TextField, StandardTextFieldProps } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

import { formatMessage } from '../CurrentLocale'
import { StyleInputNumber } from './styled'

interface BaseInputNumberProps extends StandardTextFieldProps {
  name: string
  defaultValue?: string
  allowArrow?: boolean
  fullWidth?: boolean
  required?: boolean
  validate?: any
  control: any
  errors: FieldErrors
}

const BaseInputNumber: FC<BaseInputNumberProps> = ({
  control,
  errors,
  name,
  defaultValue,
  allowArrow = false,
  fullWidth = true,
  required = false,
  validate,
  ...rest
}: any) => {
  delete rest?.label
  const type: string = 'number'
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

  const handleNumberInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const keys = allowArrow
      ? ['KeyE', 'Period']
      : ['ArrowUp', 'ArrowDown', 'KeyE', 'Period']

    if (keys.indexOf(event.code) > -1) {
      const elemTarget: any = event.target
      const value: number = Number(elemTarget.value)

      if (value <= 1 && event.code === 'ArrowDown') event.preventDefault()
    }
  }

  const handleNumberInputWheel = (event: WheelEvent<HTMLInputElement>) => {
    ;(event.target as HTMLElement).blur()
  }

  return (
    <Controller
      {...controllerProps}
      render={({ field }) => (
        <StyleInputNumber>
          <Button variant="contained">
            <RemoveIcon fontSize="small" />
          </Button>
          <TextField
            {...field}
            {...textField}
            error={!!errors[name]}
            helperText={
              (errors as any)[name] ? (errors as any)[name].message : null
            }
            onKeyDown={handleNumberInputKeyDown}
            onWheel={handleNumberInputWheel}
          />
          <Button variant="contained">
            <AddIcon fontSize="small" />
          </Button>
        </StyleInputNumber>
      )}
    />
  )
}

export default BaseInputNumber
