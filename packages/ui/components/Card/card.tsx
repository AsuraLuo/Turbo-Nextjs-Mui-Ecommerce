import { FC } from 'react'
import Card from '@mui/material/Card'
import type { CardProps } from '@mui/material/Card'

const MuiCard: FC<CardProps> = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>
}

export default MuiCard
