import { FC } from 'react'

import Dialog, { DialogProps } from '@mui/material/Dialog'

export const HeadlessDialog: FC<DialogProps> = ({ children, ...props }) => {
  return <Dialog {...props}>{children}</Dialog>
}
