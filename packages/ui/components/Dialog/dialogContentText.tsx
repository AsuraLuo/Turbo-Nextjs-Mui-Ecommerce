import { FC } from 'react'
import DialogContentText from '@mui/material/DialogContentText'
import type { DialogContentTextProps } from '@mui/material/DialogContentText'

const MuiDialogContentText: FC<DialogContentTextProps> = ({ children, ...props }) => {
  return <DialogContentText {...props}>{children}</DialogContentText>
}

export default MuiDialogContentText
