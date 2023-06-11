import { FC } from 'react'
import FormHelperText from '@mui/material/FormHelperText'
import type { FormHelperTextProps } from '@mui/material/FormHelperText'

const MuiFormHelperText: FC<FormHelperTextProps> = ({ children, ...props }) => {
  return <FormHelperText {...props}>{children}</FormHelperText>
}

export default MuiFormHelperText
