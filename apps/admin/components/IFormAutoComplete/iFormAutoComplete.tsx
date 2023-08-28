import { Controller } from 'react-hook-form'
import { Autocomplete, Checkbox, TextField } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import type { ReactNode } from 'react'
import type { Control, ControllerProps, FieldError, Path } from 'react-hook-form'
import type { AutocompleteProps, TextFieldProps } from '@mui/material'
import type { FieldValues } from 'react-hook-form/dist/types/fields'

import { useIFormError } from '../IFormError'

type AutoDefault = {
  id: string | number // must keep id in case of keepObject
  label: string
}

export type IFormAutoCompleteProps<
  F extends FieldValues,
  T,
  M extends boolean | undefined,
  D extends boolean | undefined
> = {
  name: Path<F>
  options: T[]
  control?: Control<F>
  loading?: boolean
  multiple?: M
  matchId?: boolean
  required?: boolean
  label?: TextFieldProps['label']
  showCheckbox?: boolean
  autocompleteProps?: Omit<
    AutocompleteProps<T, M, D, any>,
    'name' | 'options' | 'loading' | 'renderInput'
  >
  textFieldProps?: Omit<TextFieldProps, 'name' | 'required' | 'label'>
  validation?: ControllerProps<F>['rules']
  parseError?: (error: FieldError) => ReactNode
}

const IFormAutoComplete = <TFieldValues extends FieldValues>({
  textFieldProps,
  autocompleteProps,
  name,
  control,
  options,
  loading,
  showCheckbox,
  validation = {},
  required,
  multiple,
  matchId,
  label,
  parseError
}: IFormAutoCompleteProps<
  TFieldValues,
  AutoDefault | string | any,
  boolean | undefined,
  boolean | undefined
>) => {
  const errorMsgFn = useIFormError()
  const customErrorFn: Function = parseError || errorMsgFn
  const validationRules: ControllerProps<TFieldValues>['rules'] = {
    ...validation,
    ...(required && {
      required: validation?.required || 'This field is required'
    })
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={validationRules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
        let currentValue = multiple ? value || [] : value ?? null
        if (matchId) {
          currentValue = multiple
            ? (value || []).map((i: any) => options.find((j) => (j.id ?? j) === i))
            : options.find((i) => (i.id ?? i) === value) ?? null
        }
        return (
          <Autocomplete
            {...autocompleteProps}
            value={currentValue}
            loading={loading}
            multiple={multiple}
            options={options}
            disableCloseOnSelect={
              typeof autocompleteProps?.disableCloseOnSelect === 'boolean'
                ? autocompleteProps.disableCloseOnSelect
                : !!multiple
            }
            isOptionEqualToValue={
              autocompleteProps?.isOptionEqualToValue
                ? autocompleteProps.isOptionEqualToValue
                : (option, param) => {
                    return param ? option.id === (param?.id ?? param) : false
                  }
            }
            getOptionLabel={
              autocompleteProps?.getOptionLabel
                ? autocompleteProps.getOptionLabel
                : (option) => {
                    return `${option?.label ?? option}`
                  }
            }
            onChange={(event, param, reason, details) => {
              let changedVal = param
              if (matchId) {
                changedVal = Array.isArray(param)
                  ? param.map((i: any) => i?.id ?? i)
                  : param?.id ?? param
              }
              onChange(changedVal)
              if (autocompleteProps?.onChange) {
                autocompleteProps.onChange(event, param, reason, details)
              }
            }}
            renderOption={
              autocompleteProps?.renderOption ??
              (showCheckbox
                ? (props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox sx={{ marginRight: 1 }} checked={selected} />
                      {autocompleteProps?.getOptionLabel?.(option) || option.label || option}
                    </li>
                  )
                : undefined)
            }
            onBlur={(event) => {
              onBlur()
              if (typeof autocompleteProps?.onBlur === 'function') {
                autocompleteProps.onBlur(event)
              }
            }}
            renderInput={(params) => {
              const message =
                typeof customErrorFn === 'function' ? customErrorFn(error) : error?.message
              return (
                <TextField
                  name={name}
                  required={validation?.required ? true : required}
                  label={label}
                  {...textFieldProps}
                  {...params}
                  error={!!error}
                  InputLabelProps={{
                    ...params.InputLabelProps,
                    ...textFieldProps?.InputLabelProps
                  }}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                    ...textFieldProps?.InputProps
                  }}
                  helperText={error ? message : textFieldProps?.helperText}
                />
              )
            }}
          />
        )
      }}
    />
  )
}

export default IFormAutoComplete
