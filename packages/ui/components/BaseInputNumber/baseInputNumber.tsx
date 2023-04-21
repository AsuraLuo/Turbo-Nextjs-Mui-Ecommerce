import { FC, KeyboardEvent, WheelEvent, useEffect, useMemo, useState } from 'react'
import { Controller, FieldErrors } from 'react-hook-form'
import { Button, TextField, StandardTextFieldProps } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

import BaseTooltip from './baseTooltip'
import { formatMessage } from '../CurrentLocale'
import { StyleInputNumber } from './styled'

interface BaseInputNumberProps extends StandardTextFieldProps {
  name: string
  defaultValue?: string
  min?: number
  max?: number
  step?: number
  minQtyText?: string
  maxQtyText?: string
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
  minQtyText = '',
  maxQtyText = '',
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
  const [quantity, setQuantity] = useState<number>(1)
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

  const isQtyMin: boolean = useMemo(() => {
    return quantity === min
  }, [min, quantity])

  const isQtyMax: boolean = useMemo(() => {
    return quantity === max
  }, [max, quantity])

  const handleNumberReduce = () => {
    const value: number = Number(getValues(name))
    if (value - step >= min) {
      setValue(name, value - step)
      setQuantity(value - step)
    }
  }

  const handleNumberIncrease = () => {
    const value: number = Number(getValues(name))
    if (value + step <= max) {
      setValue(name, value + step)
      setQuantity(value + step)
    }
  }

  const handleNumberInputWheel = (event: WheelEvent<HTMLInputElement>) => {
    ;(event.target as HTMLElement).blur()
  }

  const handleNumberInputBlur = (event: KeyboardEvent<HTMLInputElement>) => {
    const elemTarget: HTMLInputElement = event.target as HTMLInputElement
    const value: number = Number(elemTarget.value)

    if (value < min) {
      setValue(name, min)
      setQuantity(min)
    } else if (value > max) {
      setValue(name, max)
      setQuantity(max)
    } else {
      setValue(name, value - (value % step))
      setQuantity(value - (value % step))
    }
  }

  const handleNumberInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const keys = allowArrow ? ['KeyE', 'Period'] : ['ArrowUp', 'ArrowDown', 'KeyE', 'Period']
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

  useEffect(() => {
    const value: number = Number(getValues(name))
    setQuantity(value)
  }, [getValues, name])

  return (
    <Controller
      {...controllerProps}
      render={({ field }) => (
        <StyleInputNumber>
          <BaseTooltip
            visible={isQtyMin}
            title={minQtyText || formatMessage({ id: 'validate.inputNumber.minQtyText' })}
          >
            <div>
              <Button variant="contained" disabled={isQtyMin} onClick={handleNumberReduce}>
                <RemoveIcon fontSize="small" />
              </Button>
            </div>
          </BaseTooltip>
          <TextField
            {...field}
            {...textField}
            error={!!errors[name]}
            helperText={(errors as any)[name] ? (errors as any)[name].message : null}
            onBlur={handleNumberInputBlur}
            onKeyDown={handleNumberInputKeyDown}
            onWheel={handleNumberInputWheel}
          />
          <BaseTooltip
            visible={isQtyMax}
            title={maxQtyText || formatMessage({ id: 'validate.inputNumber.maxQtyText' })}
          >
            <div>
              <Button variant="contained" disabled={isQtyMax} onClick={handleNumberIncrease}>
                <AddIcon fontSize="small" />
              </Button>
            </div>
          </BaseTooltip>
        </StyleInputNumber>
      )}
    />
  )
}

export default BaseInputNumber
