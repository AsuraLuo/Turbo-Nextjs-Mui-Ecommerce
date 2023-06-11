import { FC } from 'react'
import DialogContent from '@mui/material/DialogContent'
import type { DialogContentProps } from '@mui/material/DialogContent'

export const MuiDialogContent: FC<DialogContentProps> = ({ children, ...props }) => {
  return <DialogContent {...props}>{children}</DialogContent>
}
