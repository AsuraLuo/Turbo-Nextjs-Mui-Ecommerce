import { FC } from 'react'

import ClickAwayListener, {
  ClickAwayListenerProps
} from '@mui/material/ClickAwayListener'

const HeadlessClickAwayListener: FC<ClickAwayListenerProps> = ({
  children,
  ...props
}) => {
  return <ClickAwayListener {...props}>{children}</ClickAwayListener>
}

export default HeadlessClickAwayListener
