import { FC } from 'react'

import Grow, { GrowProps } from '@mui/material/Grow'

const HeadlessGrow: FC<GrowProps> = ({ children, ...props }) => {
  return <Grow {...props}>{children}</Grow>
}

export default HeadlessGrow
