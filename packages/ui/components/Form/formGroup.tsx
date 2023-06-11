import { FC } from 'react'
import FormGroup from '@mui/material/FormGroup'
import type { FormGroupProps } from '@mui/material/FormGroup'

const MuiFormGroup: FC<FormGroupProps> = ({ children, ...props }) => {
  return <FormGroup {...props}>{children}</FormGroup>
}

export default MuiFormGroup
