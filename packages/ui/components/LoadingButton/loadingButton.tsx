import { FC } from 'react'

import LoadingButton from '@mui/lab/LoadingButton'

const HeadlessLoadingButton: FC<any> = ({ children, ...props }) => {
  return <LoadingButton {...props}>{children}</LoadingButton>
}

export default HeadlessLoadingButton
