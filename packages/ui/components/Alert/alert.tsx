import { FC } from 'react'
import Alert from '@mui/material/Alert'
import type { AlertProps } from '@mui/material/Alert'

const MuiAlert: FC<AlertProps> = ({ children, ...props }) => {
  return <Alert {...props}>{children}</Alert>
}

export default MuiAlert
