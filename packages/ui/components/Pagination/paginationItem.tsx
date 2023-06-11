import { FC } from 'react'
import PaginationItem from '@mui/material/PaginationItem'
import type { PaginationItemProps } from '@mui/material/PaginationItem'

const MuiPaginationItem: FC<PaginationItemProps> = ({ ...props }) => {
  return <PaginationItem {...props} />
}

export default MuiPaginationItem
