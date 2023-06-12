import { FC } from 'react'
import Stack from '@mui/material/Stack'
import type { StackProps } from '@mui/material/Stack'

const MuiStack: FC<StackProps> = ({ children, ...props }) => {
  return <Stack {...props}>{children}</Stack>
}

export default MuiStack
