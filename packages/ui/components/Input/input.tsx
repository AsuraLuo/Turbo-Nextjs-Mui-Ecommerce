import { FC } from 'react'
import Input from '@mui/material/Input'
import type { InputProps } from '@mui/material/Input'

const MuiInput: FC<InputProps> = ({ ...props }) => {
  return <Input {...props} />
}

export default MuiInput
