import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  useTheme
} from '@mui/material'
import { useController } from 'react-hook-form'
import type { ReactNode } from 'react'
import type { CheckboxProps, FormControlLabelProps } from '@mui/material'
import type { Control, ControllerProps, FieldError, Path } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form/dist/types/fields'

import { useIFormError } from '../IFormError'

export type IFormCheckboxGroupItem = {
  id: string | number
  label: string
}

export type IFormCheckboxGroupProps<T extends FieldValues> = {
  name: Path<T>
  options: IFormCheckboxGroupItem[] | any[]
  required?: boolean
  label?: string
  labelKey?: string
  valueKey?: string
  returnObject?: boolean
  disabled?: boolean
  row?: boolean
  helperText?: ReactNode
  control?: Control<T>
  validation?: ControllerProps<T>['rules']
  checkboxColor?: CheckboxProps['color']
  labelProps?: Omit<FormControlLabelProps, 'label' | 'control'>
  parseError?: (error: FieldError) => ReactNode
  onChange?: (data: any) => void
}

const IFormCheckboxGroup = <TFieldValues extends FieldValues>({
  name,
  options,
  label,
  required,
  labelKey = 'label',
  valueKey = 'id',
  returnObject,
  disabled,
  row,
  helperText,
  control,
  validation,
  checkboxColor,
  labelProps,
  parseError,
  ...rest
}: IFormCheckboxGroupProps<TFieldValues>) => {
  const errorMsgFn = useIFormError()
  const customErrorFn: Function = parseError || errorMsgFn
  const theme = useTheme()
  const {
    field: { value = [], onChange },
    fieldState: { error }
  } = useController({
    name,
    rules: required ? { required: 'This field is required' } : validation,
    control
  })
  const message = typeof customErrorFn === 'function' ? customErrorFn(error) : error?.message
  const parsedHelperText = error ? message : helperText

  const handleChange = (index: number | string) => {
    const newArray: (string | number)[] | any[] = [...value]
    const exists =
      value.findIndex((i: any) => (returnObject ? i[valueKey] === index : i === index)) === -1
    if (exists) {
      newArray.push(returnObject ? options.find((i) => i[valueKey] === index) : index)
    } else {
      newArray.splice(
        value.findIndex((i: any) => (returnObject ? i[valueKey] === index : i === index)),
        1
      )
    }
    // setValue(name, newArray, { shouldValidate: true })
    onChange(newArray)
    if (typeof rest.onChange === 'function') {
      rest.onChange(newArray)
    }
  }

  return (
    <FormControl error={!!error} required={required}>
      {label && <FormLabel error={!!error}>{label}</FormLabel>}
      <FormGroup row={row}>
        {options.map((option: any) => {
          const optionKey = option[valueKey]
          if (!optionKey) {
            console.error(
              `CheckboxButtonGroup: valueKey ${valueKey} does not exist on option`,
              option
            )
          }
          const isChecked: boolean =
            value.findIndex((item: any) =>
              returnObject ? item[valueKey] === optionKey : item === optionKey
            ) !== -1

          return (
            <FormControlLabel
              {...labelProps}
              control={
                <Checkbox
                  sx={{
                    color: error ? theme.palette.error.main : undefined
                  }}
                  color={checkboxColor || 'primary'}
                  value={optionKey}
                  checked={isChecked}
                  disabled={disabled}
                  onChange={() => handleChange(optionKey)}
                />
              }
              label={option[labelKey]}
              key={optionKey}
            />
          )
        })}
      </FormGroup>
      {parsedHelperText && <FormHelperText error={!!error}>{parsedHelperText}</FormHelperText>}
    </FormControl>
  )
}

export default IFormCheckboxGroup
