import { FC } from 'react'

import TextField, { TextFieldProps } from '@mui/material/TextField'

const HeadlessTextField: FC<TextFieldProps> = ({ children, ...props }) => {
  return <TextField {...props}>{children}</TextField>
}

export default HeadlessTextField
