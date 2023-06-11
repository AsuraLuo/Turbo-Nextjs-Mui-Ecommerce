import { FC } from 'react'
import Tabs from '@mui/material/Tabs'
import type { TabsProps } from '@mui/material/Tabs'

const MuiTabs: FC<TabsProps> = ({ children, ...props }) => {
  return <Tabs {...props}>{children}</Tabs>
}

export default MuiTabs
