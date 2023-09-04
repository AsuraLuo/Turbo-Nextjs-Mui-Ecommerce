import {
  MobileDatePicker,
  MobileDatePickerProps,
  MobileDatePickerSlotsComponentsProps
} from '@mui/x-date-pickers/MobileDatePicker'
import { Control, Controller, ControllerProps, FieldError, Path } from 'react-hook-form'
import { TextFieldProps } from '@mui/material'
import { FieldValues } from 'react-hook-form/dist/types/fields'
import { ReactNode } from 'react'
import { useIFormError } from '../IFormError'

export type MobileDatePickerElementProps<
  T extends FieldValues,
  TInputDate,
  TDate = TInputDate
> = Omit<MobileDatePickerProps<TDate>, 'value' | 'slotProps'> & {
  name: Path<T>
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => ReactNode
  validation?: ControllerProps<T>['rules']
  control?: Control<T>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
  slotProps?: Omit<MobileDatePickerSlotsComponentsProps<TDate>, 'textField'>
}

const IFormMobilePicker = <TFieldValues extends FieldValues>({
  parseError,
  name,
  required,
  validation = {},
  inputProps,
  control,
  slotProps,
  ...rest
}: MobileDatePickerElementProps<TFieldValues, any, any>) => {
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
          <MobileDatePicker
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
              // console.log(v, keyboardInputValue)
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
                helperText: error ? message : inputProps?.helperText || rest.helperText
              }
            }}
          />
        )
      }}
    />
  )
}

export default IFormMobilePicker
