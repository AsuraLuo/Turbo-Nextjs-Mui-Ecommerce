import { FC } from 'react'
import DialogContentText from '@mui/material/DialogContentText'
import type { DialogContentTextProps } from '@mui/material/DialogContentText'

export const MuiDialogContentText: FC<DialogContentTextProps> = ({ children, ...props }) => {
  return <DialogContentText {...props}>{children}</DialogContentText>
}
