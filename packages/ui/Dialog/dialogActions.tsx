import { FC } from 'react'

import DialogActions, { DialogActionsProps } from '@mui/material/DialogActions'

export const HeadlessDialogActions: FC<DialogActionsProps> = ({
  children,
  ...props
}) => {
  return <DialogActions {...props}>{children}</DialogActions>
}
