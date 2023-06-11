import { FC } from 'react'
import Badge from '@mui/material/Badge'
import type { BadgeProps } from '@mui/material/Badge'

const MuiBadge: FC<BadgeProps> = ({ children, ...props }) => {
  return <Badge {...props}>{children}</Badge>
}

export default MuiBadge
