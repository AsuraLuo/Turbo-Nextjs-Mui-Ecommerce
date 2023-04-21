import { FC } from 'react'

import DialogTitle, { DialogTitleProps } from '@mui/material/DialogTitle'

export const HeadlessDialogTitle: FC<DialogTitleProps> = ({ children, ...props }) => {
  return <DialogTitle {...props}>{children}</DialogTitle>
}
