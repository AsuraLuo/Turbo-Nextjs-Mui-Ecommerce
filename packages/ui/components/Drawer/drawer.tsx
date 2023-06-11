import { FC } from 'react'
import Drawer from '@mui/material/Drawer'
import type { DrawerProps } from '@mui/material/Drawer'

const MuiDrawer: FC<DrawerProps> = ({ children, ...props }) => {
  return <Drawer {...props}>{children}</Drawer>
}

export default MuiDrawer
