import { FC } from 'react'
import Table from '@mui/material/Table'
import type { TableProps } from '@mui/material/Table'

const MuiTable: FC<TableProps> = ({ children, ...props }) => {
  return <Table {...props}>{children}</Table>
}

export default MuiTable
