import { FC } from 'react'

import CssBaseline, { CssBaselineProps } from '@mui/material/CssBaseline'

const HeadlessCssBaseline: FC<CssBaselineProps> = ({ children, ...props }) => {
  return <CssBaseline {...props}>{children}</CssBaseline>
}

export default HeadlessCssBaseline
