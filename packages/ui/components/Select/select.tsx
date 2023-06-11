import { FC } from 'react'
import Select from '@mui/material/Select'
import type { SelectProps } from '@mui/material/Select'

const MuiSelect: FC<SelectProps> = ({ children, ...props }) => {
  return <Select {...props}>{children}</Select>
}

export default MuiSelect
