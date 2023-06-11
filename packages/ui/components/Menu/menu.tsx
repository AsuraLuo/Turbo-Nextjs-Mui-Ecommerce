import { FC } from 'react'
import Menu from '@mui/material/Menu'
import type { MenuProps } from '@mui/material/Menu'

export const MuiMenu: FC<MenuProps> = ({ children, ...props }) => {
  return <Menu {...props}>{children}</Menu>
}
