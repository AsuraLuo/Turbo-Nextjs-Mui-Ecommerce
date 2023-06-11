import { FC } from 'react'
import InputLabel from '@mui/material/InputLabel'
import type { InputLabelProps } from '@mui/material/InputLabel'

const MuiInputLabel: FC<InputLabelProps> = ({ children, ...props }) => {
  return <InputLabel {...props}>{children}</InputLabel>
}

export default MuiInputLabel
