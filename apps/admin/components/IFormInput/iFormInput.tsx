import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import type { FC } from 'react'
import type { ControllerProps } from 'react-hook-form'
import type { TextFieldProps } from '@mui/material/TextField'

interface IFormInputProps extends Omit<TextFieldProps, 'required'> {
  name: string
  required?: boolean
  controllerProps?: ControllerProps
}

const IFormInput: FC<IFormInputProps> = ({ name, required = false, controllerProps, ...props }) => {
  const { control } = useFormContext<any>()

  return (
    <Controller
      {...controllerProps}
      name={name}
      control={control}
      rules={{ required: 'This field is required.' }}
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
