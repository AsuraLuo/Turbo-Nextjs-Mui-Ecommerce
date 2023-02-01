import { FC, ChangeEvent, useState } from 'react'
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
import { StyledSwatchRadio, StyledSwatchLabel } from './styled'

interface Option {
  label: string
  value: string
  url?: string
}

interface BaseSwatchRadioProps extends RadioGroupProps {
  control: any
  errors: FieldErrors
  label?: string
  name: string
  options: Array<Option>
  required?: boolean
  validate?: any
  radioProps?: RadioProps
  handleOptionChange?: Function
}

const BaseSwatchRadio: FC<BaseSwatchRadioProps> = ({
  control,
  errors,
  name,
  label,
  options,
  required,
  validate,
  radioProps = {},
  handleOptionChange,
  ...rest
}) => {
  const [swatchLabel, setSwatchLabel] = useState<string>('')
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

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const elemTarget: HTMLInputElement = event.target as HTMLInputElement
    const param: string = elemTarget.value
    const match: any = options.find((option: Option) => option.value === param)

    if (match) {
      setSwatchLabel(match.label)
      if (handleOptionChange) handleOptionChange(match)
    }
  }

  return (
    <StyledSwatchRadio>
      <FormControl>
        {label && (
          <FormLabel error={!!errors[name]} required={required}>
            <span dangerouslySetInnerHTML={{ __html: `${label} :` }} />
            {swatchLabel && (
              <StyledSwatchLabel
                dangerouslySetInnerHTML={{ __html: swatchLabel }}
              />
            )}
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
                        {option?.url ? (
                          <picture>
                            <img src={option.url} alt={option.label} />
                            <span>{option.label}</span>
                          </picture>
                        ) : (
                          <span>{option.label}</span>
                        )}
                      </span>
                    }
                    key={option.label}
                    control={
                      <Radio {...radioProps} onChange={handleRadioChange} />
                    }
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
    </StyledSwatchRadio>
  )
}

export default BaseSwatchRadio
