import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import type { FC } from 'react'
import type { ControllerProps } from 'react-hook-form'
import type { TextFieldProps } from '@mui/material/TextField'

interface IFormInputProps {
  name: string
  required?: boolean
  controllerProps?: ControllerProps
  textFiledProps?: TextFieldProps
}

const IFormInput: FC<IFormInputProps> = ({ name, required = false }) => {
  const { control } = useFormContext<any>()

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: 'This field is required.' }}
      render={({ field, formState: { errors } }) => {
        const { name: fieldName } = field
        return (
          <TextField
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
