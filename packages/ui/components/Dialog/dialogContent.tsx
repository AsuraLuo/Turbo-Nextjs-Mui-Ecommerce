import { FC } from 'react'

import DialogContent, { DialogContentProps } from '@mui/material/DialogContent'

export const HeadlessDialogContent: FC<DialogContentProps> = ({ children, ...props }) => {
  return <DialogContent {...props}>{children}</DialogContent>
}
