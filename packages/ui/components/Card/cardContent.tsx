import { FC } from 'react'
import CardContent from '@mui/material/CardContent'
import type { CardContentProps } from '@mui/material/CardContent'

const MuiCardContent: FC<CardContentProps> = ({ children, ...props }) => {
  return <CardContent {...props}>{children}</CardContent>
}

export default MuiCardContent
