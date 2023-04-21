import { FC } from 'react'

import Badge, { BadgeProps } from '@mui/material/Badge'

const HeadlessBadge: FC<BadgeProps> = ({ children, ...props }) => {
  return <Badge {...props}>{children}</Badge>
}

export default HeadlessBadge
