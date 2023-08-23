import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Checkbox, FormControl, FormGroup, FormControlLabel, FormHelperText } from '@mui/material'
import type { CheckboxProps } from '@mui/material/Checkbox'
import type { FC, ChangeEvent } from 'react'
import type { ControllerProps } from 'react-hook-form'

type ControllerRules = ControllerProps['rules']

type InputRules = Exclude<ControllerRules, 'required'> & {
  required?: boolean
}

interface IFormCheckboxProps extends Omit<CheckboxProps, 'required'> {
  name: string
  label?: string
  rules?: InputRules
  controllerProps?: Omit<ControllerProps, 'name' | 'control' | 'rules'>
}

const IFormCheckbox: FC<IFormCheckboxProps> = ({
  name,
  label = '',
  rules = {},
  controllerProps,
  ...props
}) => {
  const { control } = useFormContext<any>()
  const { required = false, ...rest } = rules
  const controlRules: ControllerRules = {
    required: required && 'This field is required.',
    ...rest
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>, onChange: any) => {
    const target: HTMLInputElement = event.target as HTMLInputElement
    onChange(target.checked)
    props?.onChange?.(event, target.checked)
  }

  return (
    <Controller
      {...controllerProps}
      name={name}
      control={control}
      rules={controlRules}
      render={({ field, formState: { errors } }) => {
        const { name: fieldName, value, onChange, ...params } = field
        return (
          <FormControl required={required} error={!!errors}>
            <FormGroup row>
              <FormControlLabel
                label={label}
                control={
                  <Checkbox
                    {...props}
                    {...params}
                    required={required}
                    value={value}
                    checked={!!value}
                    onChange={(event) => handleOnChange(event, onChange)}
                  />
                }
              />
            </FormGroup>
            <FormHelperText error={!!errors[fieldName]}>
              {(errors as any)[fieldName]?.message ?? null}
            </FormHelperText>
          </FormControl>
        )
      }}
    />
  )
}

export default memo(IFormCheckbox)
