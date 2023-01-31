import { FC, ChangeEvent } from 'react'
import { Controller } from 'react-hook-form'
import {
  Select,
  SelectProps,
  FormControl,
  FormHelperText,
  MenuItem
} from '@mui/material'

import { formatMessage } from '../CurrentLocale'
import { StyledInputLabel } from './styled'

type Option = {
  label: string
  value: string
}

interface BaseSelectProps extends SelectProps {
  control: any
  errors: any
  name: string
  label?: string
  defaultValue?: string
  required?: boolean
  validate?: any
  options: Array<Option>
  setValue: Function
  trigger: Function
}

const BaseSelect: FC<BaseSelectProps> = ({
  control,
  errors,
  name,
  label,
  defaultValue,
  required = false,
  validate,
  options = [],
  setValue,
  trigger,
  ...rest
}: any) => {
  const { onChange } = rest
  const fieldsProps = {
    type: 'dropdown',
    name,
    key: name,
    defaultValue,
    rules: {
      required: required && formatMessage({ id: 'global.required' }),
      validate
    },
    control
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const elemTarget: any = e.target
    setValue(name, elemTarget.value)
    trigger([name])
    if (onChange) onChange(e)
  }

  return (
    <FormControl fullWidth>
      {label && (
        <StyledInputLabel error={!!errors[name]} required={required} filled>
          <span dangerouslySetInnerHTML={{ __html: label }} />
        </StyledInputLabel>
      )}
      <Controller
        {...fieldsProps}
        render={({ field }) => (
          <Select
            {...field}
            {...rest}
            onChange={handleOnChange}
            error={!!errors[name]}
          >
            {options?.length &&
              options.map((option: any) => (
                <MenuItem key={option.value} value={option.value}>
                  <span dangerouslySetInnerHTML={{ __html: option.label }} />
                </MenuItem>
              ))}
          </Select>
        )}
      />
      {errors[name] && (
        <FormHelperText error={!!errors[name]}>
          {errors[name] ? errors[name].message : null}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default BaseSelect
