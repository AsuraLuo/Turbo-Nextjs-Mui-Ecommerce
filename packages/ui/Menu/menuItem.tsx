import { FC } from 'react'

import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'

export const HeadlessMenuItem: FC<MenuItemProps> = ({ children, ...props }) => {
  return <MenuItem {...props}>{children}</MenuItem>
}
