import { FC } from 'react'
import Skeleton from '@mui/material/Skeleton'
import type { SkeletonProps } from '@mui/material/Skeleton'

const MuiSkeleton: FC<SkeletonProps> = ({ children, ...props }) => {
  return <Skeleton {...props}>{children}</Skeleton>
}

export default MuiSkeleton
