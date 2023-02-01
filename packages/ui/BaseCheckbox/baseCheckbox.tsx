import { FC, ChangeEvent } from 'react'
import { Controller, FieldErrors } from 'react-hook-form'
import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormHelperText
} from '@mui/material'

import { formatMessage } from '../CurrentLocale'

interface BaseCheckboxProps extends CheckboxProps {
  name: string
  label?: string
  required?: boolean
  validate?: any
  control: any
  errors: FieldErrors
  setValue: Function
  trigger: Function
}

const BaseCheckbox: FC<BaseCheckboxProps> = ({
  control,
  errors,
  name,
  label,
  required,
  validate,
  setValue,
  trigger,
  ...rest
}) => {
  const { onChange } = rest
  const controllerProps: any = {
    type: 'checkbox',
    name,
    key: name,
    rules: {
      required: required && formatMessage({ id: 'global.required' }),
      validate
    },
    control
  }

  const checkboxFiled: any = {
    name,
    key: name,
    required,
    ...rest
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const elemTarget: HTMLInputElement = event.target as HTMLInputElement
    setValue(name, elemTarget.checked)
    trigger([name])
    if (onChange) onChange(event, elemTarget.checked)
  }

  return (
    <FormControl>
      <Controller
        {...controllerProps}
        render={({ field }) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  {...checkboxFiled}
                  onChange={handleOnChange}
                />
              }
              label={label}
              checked={field.value}
            />
          )
        }}
      />
      {errors[name] && (
        <FormHelperText error={!!errors[name]}>
          {(errors as any)[name] ? (errors as any)[name].message : null}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default BaseCheckbox
