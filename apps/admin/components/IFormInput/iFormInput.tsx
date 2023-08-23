import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import type { FC } from 'react'
import type { ControllerProps } from 'react-hook-form'
import type { TextFieldProps } from '@mui/material/TextField'

type ControllerRules = ControllerProps['rules']

type InputRules = Exclude<ControllerRules, 'required'> & {
  required?: boolean
}

interface IFormInputProps extends Omit<TextFieldProps, 'required'> {
  name: string
  rules?: InputRules
  controllerProps?: Omit<ControllerProps, 'name' | 'control' | 'rules'>
}

const IFormInput: FC<IFormInputProps> = ({ name, rules = {}, controllerProps, ...props }) => {
  const { control } = useFormContext<any>()
  const { required = false, ...rest } = rules
  const controlRules: ControllerRules = {
    required: required && 'This field is required.',
    ...rest
  }

  return (
    <Controller
      {...controllerProps}
      name={name}
      control={control}
      rules={controlRules}
      render={({ field, formState: { errors } }) => {
        const { name: fieldName } = field
        return (
          <TextField
            {...props}
            {...field}
            required={required}
            error={!!errors[fieldName]}
            helperText={(errors as any)[fieldName]?.message ?? null}
          />
        )
      }}
    />
  )
}

export default memo(IFormInput)
