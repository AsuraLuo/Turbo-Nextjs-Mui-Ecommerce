import { FC } from 'react'

import Collapse, { CollapseProps } from '@mui/material/Collapse'

const HeadlessCollapse: FC<CollapseProps> = ({ children, ...props }) => {
  return <Collapse {...props}>{children}</Collapse>
}

export default HeadlessCollapse
