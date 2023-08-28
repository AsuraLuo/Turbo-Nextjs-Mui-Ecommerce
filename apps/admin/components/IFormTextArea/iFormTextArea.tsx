import { Controller } from 'react-hook-form'
import { TextareaAutosize, TextField } from '@mui/material'
import type { CSSProperties, ReactNode } from 'react'
import type { TextFieldProps } from '@mui/material'
import type { Control, ControllerProps, FieldError, Path } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form/dist/types/fields'

import { useIFormError } from '../IFormError'

export type IFormTextAreaProps<T extends FieldValues = FieldValues> = Omit<
  TextFieldProps,
  'name' | 'type'
> & {
  name: Path<T>
  control?: Control<T>
  validation?: ControllerProps<T>['rules']
  resizeStyle?: CSSProperties['resize']
  parseError?: (error: FieldError) => ReactNode
}

const IFormTextArea = <TFieldValues extends FieldValues = FieldValues>({
  name,
  required,
  control,
  rows,
  validation = {},
  resizeStyle,
  parseError,
  ...rest
}: IFormTextAreaProps<TFieldValues>) => {
  const errorMsgFn = useIFormError()
  const customErrorFn: Function = parseError || errorMsgFn

  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({ field: { value, onChange, onBlur, ref }, fieldState: { error } }) => {
        const message: string =
          typeof customErrorFn === 'function' ? customErrorFn(error) : error?.message
        return (
          <TextField
            {...rest}
            name={name}
            value={value ?? ''}
            onChange={(ev) => {
              onChange(ev.target.value)
              if (typeof rest.onChange === 'function') {
                rest.onChange(ev)
              }
            }}
            onBlur={onBlur}
            required={required}
            error={!!error}
            helperText={error ? message : rest.helperText}
            inputRef={ref}
            multiline
            InputProps={{
              inputComponent: TextareaAutosize,
              inputProps: {
                minRows: rows,
                style: {
                  resize: resizeStyle || 'both'
                }
              }
            }}
          />
        )
      }}
    />
  )
}

export default IFormTextArea
