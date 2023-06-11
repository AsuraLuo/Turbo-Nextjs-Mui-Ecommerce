import { FC } from 'react'
import InputBase from '@mui/material/InputBase'
import type { InputBaseProps } from '@mui/material/InputBase'

const MuiInputBase: FC<InputBaseProps> = ({ ...props }) => {
  return <InputBase {...props} />
}

export default MuiInputBase
