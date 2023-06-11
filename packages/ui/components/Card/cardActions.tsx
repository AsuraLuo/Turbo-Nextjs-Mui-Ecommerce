import { FC } from 'react'
import CardActions from '@mui/material/CardActions'
import type { CardActionsProps } from '@mui/material/CardActions'

const MuiCardActions: FC<CardActionsProps> = ({ children, ...props }) => {
  return <CardActions {...props}>{children}</CardActions>
}

export default MuiCardActions
