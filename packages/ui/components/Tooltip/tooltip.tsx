import { FC } from 'react'
import Tooltip from '@mui/material/Tooltip'
import type { TooltipProps } from '@mui/material/Tooltip'

const MuiTooltip: FC<TooltipProps> = ({ children, ...props }) => {
  return <Tooltip {...props}>{children}</Tooltip>
}

export default MuiTooltip
