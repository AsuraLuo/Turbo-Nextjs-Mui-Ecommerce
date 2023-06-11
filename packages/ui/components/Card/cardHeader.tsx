import { FC } from 'react'
import CardHeader from '@mui/material/CardHeader'
import type { CardHeaderProps } from '@mui/material/CardHeader'

const MuiCardHeader: FC<CardHeaderProps> = ({ children, ...props }) => {
  return <CardHeader {...props}>{children}</CardHeader>
}

export default MuiCardHeader
