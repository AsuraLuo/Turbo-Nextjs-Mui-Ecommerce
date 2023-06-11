import { FC } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import type { LinearProgressProps } from '@mui/material/LinearProgress'

const MuiLinearProgress: FC<LinearProgressProps> = ({ ...props }) => {
  return <LinearProgress {...props} />
}

export default MuiLinearProgress
