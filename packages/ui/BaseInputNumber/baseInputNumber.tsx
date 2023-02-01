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
  min?: number
  max?: number
  step?: number
  allowArrow?: boolean
  fullWidth?: boolean
  required?: boolean
  validate?: any
  control: any
  errors: FieldErrors
  getValues: Function
  setValue: Function
}

const BaseInputNumber: FC<BaseInputNumberProps> = ({
  control,
  errors,
  name,
  defaultValue,
  min = 1,
  max = 99999,
  step = 1,
  allowArrow = false,
  fullWidth = false,
  required = false,
  validate,
  getValues,
  setValue,
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

  const handleNumberInputWheel = (event: WheelEvent<HTMLInputElement>) => {
    ;(event.target as HTMLElement).blur()
  }

  const handleNumberReduce = () => {
    const quantity: number = Number(getValues(name))
    if (quantity - step >= min) setValue(name, quantity - step)
  }

  const handleNumberIncrease = () => {
    const quantity: number = Number(getValues(name))
    if (quantity + step <= max) setValue(name, quantity + step)
  }

  const handleNumberInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const keys = allowArrow
      ? ['KeyE', 'Period']
      : ['ArrowUp', 'ArrowDown', 'KeyE', 'Period']
    const eventCode: string = event.code
    const isArrowDown: boolean = eventCode === 'ArrowDown'

    if (eventCode === 'Minus') event.preventDefault()
    if (keys.indexOf(event.code) > -1) {
      const elemTarget: any = event.target
      const value: number = Number(elemTarget.value)

      if (value <= 1 && isArrowDown) {
        event.preventDefault()
      } else {
        event.preventDefault()
        if (isArrowDown) {
          handleNumberReduce()
        } else {
          handleNumberIncrease()
        }
      }
    }
  }

  return (
    <Controller
      {...controllerProps}
      render={({ field }) => (
        <StyleInputNumber>
          <Button variant="contained" onClick={handleNumberReduce}>
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
          <Button variant="contained" onClick={handleNumberIncrease}>
            <AddIcon fontSize="small" />
          </Button>
        </StyleInputNumber>
      )}
    />
  )
}

export default BaseInputNumber
