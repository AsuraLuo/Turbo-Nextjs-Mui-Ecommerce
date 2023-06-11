import { FC } from 'react'
import Dialog from '@mui/material/Dialog'
import type { DialogProps } from '@mui/material/Dialog'

export const MuiDialog: FC<DialogProps> = ({ children, ...props }) => {
  return <Dialog {...props}>{children}</Dialog>
}
