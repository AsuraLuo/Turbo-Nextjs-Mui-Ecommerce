import { FC } from 'react'
import Portal from '@mui/material/Portal'
import type { PortalProps } from '@mui/material/Portal'

const MuiPortal: FC<PortalProps> = ({ children, ...props }) => {
  return <Portal {...props}>{children}</Portal>
}

export default MuiPortal
