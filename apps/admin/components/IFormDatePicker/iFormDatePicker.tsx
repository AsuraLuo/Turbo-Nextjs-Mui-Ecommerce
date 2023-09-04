import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Controller } from 'react-hook-form'
import type { ReactNode } from 'react'
import type { TextFieldProps } from '@mui/material'
import type {
  DatePickerProps,
  DatePickerSlotsComponentsProps
} from '@mui/x-date-pickers/DatePicker'
import type { Control, ControllerProps, FieldError, Path } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form/dist/types/fields'

import { useIFormError } from '../IFormError'

export type IFormDatePickerProps<T extends FieldValues, TInputDate, TDate = TInputDate> = Omit<
  DatePickerProps<TDate>,
  'value' | 'slotProps'
> & {
  name: Path<T>
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => ReactNode
  validation?: ControllerProps<T>['rules']
  control?: Control<T>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
  textReadOnly?: boolean
  slotProps?: Omit<DatePickerSlotsComponentsProps<TDate>, 'textField'>
}

const IFormDatePicker = <TFieldValues extends FieldValues>({
  parseError,
  name,
  required,
  validation = {},
  inputProps,
  control,
  textReadOnly,
  slotProps,
  ...rest
}: IFormDatePickerProps<TFieldValues, any, any>) => {
  const errorMsgFn = useIFormError()
  const customErrorFn: Function = parseError || errorMsgFn

  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      defaultValue={null as any}
      render={({ field, fieldState: { error } }) => {
        const message: string =
          typeof customErrorFn === 'function' ? customErrorFn(error) : error?.message
        if (field?.value && typeof field?.value === 'string') {
          field.value = new Date(field.value) as any // need to see if this works for all localization adaptors
        }

        return (
          <DatePicker
            {...rest}
            {...field}
            ref={(r) => {
              field.ref(r?.querySelector('input'))
            }}
            onClose={(...args) => {
              field.onBlur()
              if (rest.onClose) {
                rest.onClose(...args)
              }
            }}
            onChange={(v, keyboardInputValue) => {
              field.onChange(v, keyboardInputValue)
              if (typeof rest.onChange === 'function') {
                rest.onChange(v, keyboardInputValue)
              }
            }}
            slotProps={{
              ...slotProps,
              textField: {
                ...inputProps,
                required,
                error: !!error,
                helperText: error ? message : inputProps?.helperText || rest.helperText,
                inputProps: {
                  readOnly: !!textReadOnly,
                  ...inputProps?.inputProps
                }
              }
            }}
          />
        )
      }}
    />
  )
}

export default IFormDatePicker
