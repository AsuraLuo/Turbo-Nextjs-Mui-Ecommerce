import { FC } from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import type { DialogTitleProps } from '@mui/material/DialogTitle'

export const MuiDialogTitle: FC<DialogTitleProps> = ({ children, ...props }) => {
  return <DialogTitle {...props}>{children}</DialogTitle>
}
