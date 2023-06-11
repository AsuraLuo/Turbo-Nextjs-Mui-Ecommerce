import { FC } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import type { CssBaselineProps } from '@mui/material/CssBaseline'

const MuiCssBaseline: FC<CssBaselineProps> = ({ children, ...props }) => {
  return <CssBaseline {...props}>{children}</CssBaseline>
}

export default MuiCssBaseline
