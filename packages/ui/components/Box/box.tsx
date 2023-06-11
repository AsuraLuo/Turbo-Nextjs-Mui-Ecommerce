import { FC } from 'react'
import Box from '@mui/material/Box'
import type { BoxProps } from '@mui/material/Box'

const MuiBox: FC<BoxProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>
}

export default MuiBox
