import { FC } from 'react'

import Grid, { GridProps } from '@mui/material/Grid'

const HeadlessGrid: FC<GridProps> = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>
}

export default HeadlessGrid
