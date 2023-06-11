import { FC } from 'react'
import DialogActions from '@mui/material/DialogActions'
import type { DialogActionsProps } from '@mui/material/DialogActions'

export const MuiDialogActions: FC<DialogActionsProps> = ({ children, ...props }) => {
  return <DialogActions {...props}>{children}</DialogActions>
}
