import { FC } from 'react'
import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'

const MuiButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

export default MuiButton
