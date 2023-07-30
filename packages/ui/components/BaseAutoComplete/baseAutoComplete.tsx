import Autocomplete from '@mui/material/Autocomplete'
import { Controller } from 'react-hook-form'
import type { FC } from 'react'
import type { AutocompleteProps } from '@mui/material/Autocomplete'
import type { StandardTextFieldProps } from '@mui/material/TextField'
import type { FieldErrors } from 'react-hook-form'

import TextField from '../TextField'
import { formatMessage } from '../CurrentLocale'

type MultipleType = boolean | undefined
type DisableClearableType = boolean | undefined
type FreeSoloType = boolean | undefined

interface BaseAutoCompleteProps<T> extends StandardTextFieldProps {
  name: string
  type?: string
  defaultValue?: string
  fullWidth?: boolean
  required?: boolean
  validate?: any
  options: any[]
  control: any
  errors: FieldErrors
  autocompleteProps?: AutocompleteProps<T, MultipleType, DisableClearableType, FreeSoloType>
}

const BaseAutoComplete: FC<BaseAutoCompleteProps<any>> = ({
  control,
  errors,
  name,
  defaultValue,
  fullWidth = true,
  required = false,
  validate,
  options = [],
  type = 'text',
  ...rest
}) => {
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
      render={({ field }) => {
        return (
          <Autocomplete
            freeSolo
            options={options}
            renderInput={(params) => {
              const { inputProps, ...restParams } = params
              return (
                <TextField
                  {...restParams}
                  {...textField}
                  {...field}
                  inputProps={{
                    ...inputProps,
                    autoComplete: 'disabled' // disable autocomplete and autofill
                  }}
                  error={!!errors[name]}
                  helperText={(errors as any)[name] ? (errors as any)[name].message : null}
                />
              )
            }}
            onChange={(_, data) => field.onChange(data)}
          />
        )
      }}
    />
  )
}

export default BaseAutoComplete
