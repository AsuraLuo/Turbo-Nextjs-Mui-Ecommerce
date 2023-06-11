import { FC } from 'react'
import TextField from '@mui/material/TextField'
import type { TextFieldProps } from '@mui/material/TextField'

const MuiTextField: FC<TextFieldProps> = ({ children, ...props }) => {
  return <TextField {...props}>{children}</TextField>
}

export default MuiTextField
