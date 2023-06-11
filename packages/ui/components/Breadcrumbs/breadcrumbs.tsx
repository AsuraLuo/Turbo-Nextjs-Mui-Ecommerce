import { FC } from 'react'

import Breadcrumbs, { BreadcrumbsProps } from '@mui/material/Breadcrumbs'

const MuiBreadcrumbs: FC<BreadcrumbsProps> = ({ children, ...props }) => {
  return <Breadcrumbs {...props}>{children}</Breadcrumbs>
}

export default MuiBreadcrumbs
