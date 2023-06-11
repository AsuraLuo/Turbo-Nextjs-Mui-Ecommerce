import { FC } from 'react'
import Pagination from '@mui/material/Pagination'
import type { PaginationProps } from '@mui/material/Pagination'

const MuiPagination: FC<PaginationProps> = ({ ...props }) => {
  return <Pagination {...props} />
}

export default MuiPagination
