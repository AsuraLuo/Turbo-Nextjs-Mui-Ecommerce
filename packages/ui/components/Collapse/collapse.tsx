import { FC } from 'react'
import Collapse from '@mui/material/Collapse'
import type { CollapseProps } from '@mui/material/Collapse'

const MuiCollapse: FC<CollapseProps> = ({ children, ...props }) => {
  return <Collapse {...props}>{children}</Collapse>
}

export default MuiCollapse
