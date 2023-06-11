import { FC } from 'react'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import type { ClickAwayListenerProps } from '@mui/material/ClickAwayListener'

const MuiClickAwayListener: FC<ClickAwayListenerProps> = ({ children, ...props }) => {
  return <ClickAwayListener {...props}>{children}</ClickAwayListener>
}

export default MuiClickAwayListener
