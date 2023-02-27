import { FC } from 'react'

import Breadcrumbs, { BreadcrumbsProps } from '@mui/material/Breadcrumbs'

const HeadlessBreadcrumbs: FC<BreadcrumbsProps> = ({ children, ...props }) => {
  return <Breadcrumbs {...props}>{children}</Breadcrumbs>
}

export default HeadlessBreadcrumbs
