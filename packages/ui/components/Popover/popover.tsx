import { FC } from 'react'
import Popover from '@mui/material/Popover'
import type { PopoverProps } from '@mui/material/Popover'

const MuiPopover: FC<PopoverProps> = ({ children, ...props }) => {
  return <Popover {...props}>{children}</Popover>
}

export default MuiPopover
