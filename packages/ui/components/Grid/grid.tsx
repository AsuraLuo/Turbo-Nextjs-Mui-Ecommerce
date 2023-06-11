import { FC } from 'react'
import Grid from '@mui/material/Grid'
import type { GridProps } from '@mui/material/Grid'

const MuiGrid: FC<GridProps> = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>
}

export default MuiGrid
