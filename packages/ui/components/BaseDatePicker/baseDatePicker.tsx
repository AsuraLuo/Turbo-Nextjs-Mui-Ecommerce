import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { format } from 'date-fns'

import { formatMessage } from '../CurrentLocale'
import { StyledDatePicker } from './styled'

const BaseDatePicker = ({ control, errors, ...rest }: any) => {
  const {
    name,
    default: defaultValue,
    required,
    label,
    validate,
    muiTextFieldProps = {},
    setValue,
    variant,
    getValues
  } = rest

  const { inputFormat = 'yyyy-MM-dd' } = muiTextFieldProps

  const fieldsProps = {
    type: 'date',
    name,
    key: name,
    defaultValue,
    rules: {
      required:
        required &&
        formatMessage({
          id: 'global.required'
        }),
      validate: validate && ((v: string) => validate(v))
    },
    control
  }

  const muixPickerProps = muiTextFieldProps || {}

  const handleDatePickerChange = (value: Date) => {
    try {
      setValue(name, format(value, inputFormat))
    } catch (error) {
      setValue(name, value)
    }
  }

  return (
    <StyledDatePicker>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          {...fieldsProps}
          render={({
            field: {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              ref,
              // eslint-disable-next-line no-shadow
              ...rest
            }
          }) => (
            <DesktopDatePicker
              label={label}
              inputFormat={inputFormat}
              {...muixPickerProps}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant={variant || 'filled'}
                  required={required}
                  inputProps={{
                    readOnly: true
                  }}
                  value={getValues(name) || defaultValue}
                  error={!!errors[name]}
                  helperText={(errors as any)[name] ? (errors as any)[name].message : null}
                />
              )}
              {...rest}
              onChange={handleDatePickerChange}
            />
          )}
        />
      </LocalizationProvider>
    </StyledDatePicker>
  )
}

export default BaseDatePicker
