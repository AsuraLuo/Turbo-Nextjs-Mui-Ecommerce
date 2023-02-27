import { FC } from 'react'

import DialogContentText, {
  DialogContentTextProps
} from '@mui/material/DialogContentText'

export const HeadlessDialogContentText: FC<DialogContentTextProps> = ({
  children,
  ...props
}) => {
  return <DialogContentText {...props}>{children}</DialogContentText>
}
