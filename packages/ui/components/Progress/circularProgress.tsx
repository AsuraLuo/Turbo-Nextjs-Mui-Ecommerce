import { FC } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import type { CircularProgressProps } from '@mui/material/CircularProgress'

const MuiCircularProgress: FC<CircularProgressProps> = ({ ...props }) => {
  return <CircularProgress {...props} />
}

export default MuiCircularProgress
