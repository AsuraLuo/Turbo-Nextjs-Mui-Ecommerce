import { FC } from 'react'

import NoSsr, { NoSsrProps } from '@mui/material/NoSsr'

const HeadlessNoSsr: FC<NoSsrProps> = ({ children, ...props }) => {
  return <NoSsr {...props}>{children}</NoSsr>
}

export default HeadlessNoSsr
