import { FC } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import type { LoadingButtonProps } from '@mui/lab/LoadingButton'

const MuiLoadingButton: FC<LoadingButtonProps> = ({ children, ...props }) => {
  return <LoadingButton {...props}>{children}</LoadingButton>
}

export default MuiLoadingButton
