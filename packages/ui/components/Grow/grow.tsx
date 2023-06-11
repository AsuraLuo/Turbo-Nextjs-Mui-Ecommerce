import { FC } from 'react'

import Grow, { GrowProps } from '@mui/material/Grow'

const MuiGrow: FC<GrowProps> = ({ children, ...props }) => {
  return <Grow {...props}>{children}</Grow>
}

export default MuiGrow
