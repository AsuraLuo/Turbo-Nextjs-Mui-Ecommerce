import { FC } from 'react'
import FormLabel from '@mui/material/FormLabel'
import type { FormLabelProps } from '@mui/material/FormLabel'

const MuiFormLabel: FC<FormLabelProps> = ({ children, ...props }) => {
  return <FormLabel {...props}>{children}</FormLabel>
}

export default MuiFormLabel
