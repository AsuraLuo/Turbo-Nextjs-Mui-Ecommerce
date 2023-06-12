import { FC } from 'react'
import MenuItem from '@mui/material/MenuItem'
import type { MenuItemProps } from '@mui/material/MenuItem'

const MuiMenuItem: FC<MenuItemProps> = ({ children, ...props }) => {
  return <MenuItem {...props}>{children}</MenuItem>
}

export default MuiMenuItem
