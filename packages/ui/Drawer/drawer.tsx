import { FC } from 'react'

import Drawer, { DrawerProps } from '@mui/material/Drawer'

const HeadlessDrawer: FC<DrawerProps> = ({ children, ...props }) => {
  return <Drawer {...props}>{children}</Drawer>
}

export default HeadlessDrawer
