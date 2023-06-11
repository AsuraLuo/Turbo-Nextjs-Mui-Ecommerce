import { FC } from 'react'
import Tab from '@mui/material/Tab'
import type { TabProps } from '@mui/material/Tab'

const MuiTab: FC<TabProps> = ({ children, ...props }) => {
  return <Tab {...props}>{children}</Tab>
}

export default MuiTab
