import { FC } from 'react'
import { Controller, FieldErrors } from 'react-hook-form'
import {
  Radio,
  RadioProps,
  RadioGroup,
  RadioGroupProps,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText
} from '@mui/material'

import { formatMessage } from '../CurrentLocale'

interface Option {
  label: string
  value: string
}

interface BaseRadioGroupProps extends RadioGroupProps {
  control: any
  errors: FieldErrors
  name: string
  label?: string
  options: Array<Option>
  required?: boolean
  validate?: any
  radioProps?: RadioProps
}

const BaseRadioGroup: FC<BaseRadioGroupProps> = ({
  control,
  errors,
  name,
  label,
  options,
  required,
  validate,
  radioProps = {},
  ...rest
}) => {
  const fieldsProps = {
    type: 'radio',
    name,
    key: name,
    rules: {
      required: required && formatMessage({ id: 'global.required' }),
      validate
    },
    control
  }
  return (
    <FormControl>
      {label && (
        <FormLabel error={!!errors[name]} required={required}>
          <span dangerouslySetInnerHTML={{ __html: label }} />
        </FormLabel>
      )}
      <Controller
        {...fieldsProps}
        render={({ field }) => (
          <RadioGroup {...field} {...rest}>
            {options?.length &&
              options.map((option: Option) => (
                <FormControlLabel
                  value={option.value}
                  label={
                    <span>
                      <span>{option.label}</span>
                    </span>
                  }
                  key={option.label}
                  control={<Radio {...radioProps} />}
                />
              ))}
          </RadioGroup>
        )}
      />
      {errors[name] && (
        <FormHelperText error={!!errors[name]}>
          {(errors as any)[name] ? (errors as any)[name].message : null}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default BaseRadioGroup
