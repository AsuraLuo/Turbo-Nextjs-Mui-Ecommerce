import { FC } from 'react'
import FormControl from '@mui/material/FormControl'
import type { FormControlProps } from '@mui/material/FormControl'

const MuiFormControl: FC<FormControlProps> = ({ children, ...props }) => {
  return <FormControl {...props}>{children}</FormControl>
}

export default MuiFormControl
