import { FC } from 'react'
import NoSsr from '@mui/material/NoSsr'
import type { NoSsrProps } from '@mui/material/NoSsr'

const MuiNoSsr: FC<NoSsrProps> = ({ children, ...props }) => {
  return <NoSsr {...props}>{children}</NoSsr>
}

export default MuiNoSsr
