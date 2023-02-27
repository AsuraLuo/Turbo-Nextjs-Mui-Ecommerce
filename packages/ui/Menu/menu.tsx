import { FC } from 'react'

import Menu, { MenuProps } from '@mui/material/Menu'

export const HeadlessMenu: FC<MenuProps> = ({ children, ...props }) => {
  return <Menu {...props}>{children}</Menu>
}
