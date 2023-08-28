import { Controller } from 'react-hook-form'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText } from '@mui/material'
import type { ReactNode } from 'react'
import type { CheckboxProps, FormControlLabelProps } from '@mui/material'
import type { Control, ControllerProps, FieldError, Path } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form/dist/types/fields'

import { useIFormError } from '../IFormError'

export type IFormCheckboxProps<T extends FieldValues> = Omit<CheckboxProps, 'name'> & {
  name: Path<T>
  label?: FormControlLabelProps['label']
  labelProps?: Omit<FormControlLabelProps, 'label' | 'control'>
  helperText?: string
  control?: Control<T>
  validation?: ControllerProps<T>['rules']
  parseError?: (error: FieldError) => ReactNode
}

const IFormCheckbox = <TFieldValues extends FieldValues>({
  name,
  label,
  labelProps,
  helperText,
  required,
  control,
  validation = {},
  parseError,
  ...rest
}: IFormCheckboxProps<TFieldValues>) => {
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
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        const message = typeof customErrorFn === 'function' ? customErrorFn(error) : error?.message
        const parsedHelperText = error ? message : helperText
        return (
          <FormControl required={required} error={!!error}>
            <FormGroup row>
              <FormControlLabel
                {...labelProps}
                label={label || ''}
                control={
                  <Checkbox
                    {...rest}
                    color={rest.color || 'primary'}
                    sx={[
                      ...(Array.isArray(rest.sx) ? rest.sx : [rest.sx]),
                      {
                        color: error ? 'error.main' : undefined
                      }
                    ]}
                    value={value}
                    checked={!!value}
                    onChange={(ev) => {
                      onChange(!value)
                      if (typeof rest.onChange === 'function') {
                        rest.onChange(ev, !value)
                      }
                    }}
                  />
                }
              />
            </FormGroup>
            {parsedHelperText && (
              <FormHelperText error={!!error}>{parsedHelperText}</FormHelperText>
            )}
          </FormControl>
        )
      }}
    />
  )
}

export default IFormCheckbox
