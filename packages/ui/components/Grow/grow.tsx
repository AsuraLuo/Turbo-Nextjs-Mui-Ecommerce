import { FC } from 'react'
import Grow from '@mui/material/Grow'
import type { GrowProps } from '@mui/material/Grow'

const MuiGrow: FC<GrowProps> = ({ children, ...props }) => {
  return <Grow {...props}>{children}</Grow>
}

export default MuiGrow
