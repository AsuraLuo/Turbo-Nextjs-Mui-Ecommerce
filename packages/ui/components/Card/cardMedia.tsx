import { FC } from 'react'
import CardMedia from '@mui/material/CardMedia'
import type { CardMediaProps } from '@mui/material/CardMedia'

const MuiCardMedia: FC<CardMediaProps> = ({ children, ...props }) => {
  return <CardMedia {...props}>{children}</CardMedia>
}

export default MuiCardMedia
