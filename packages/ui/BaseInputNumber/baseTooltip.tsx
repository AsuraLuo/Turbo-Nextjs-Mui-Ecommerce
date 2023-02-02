import { Fragment } from 'react'
import { Tooltip } from '@mui/material'

const BaseTooltip = ({ children, visible, ...props }: any) => {
  return visible ? (
    <Tooltip {...props}>{children}</Tooltip>
  ) : (
    <Fragment>{children}</Fragment>
  )
}

export default BaseTooltip
