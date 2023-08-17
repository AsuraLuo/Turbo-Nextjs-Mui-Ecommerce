import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextField } from '@mui/material'
import type { FC } from 'react'

interface ITextFiledProps {
  name: string
  control: any
  required?: boolean
}

const ITextFiled: FC<ITextFiledProps> = ({ name, required = false }) => {
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

export default memo(ITextFiled)
