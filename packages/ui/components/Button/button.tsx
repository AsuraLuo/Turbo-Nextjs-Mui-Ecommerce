import { FC } from 'react'

import Button, { ButtonProps } from '@mui/material/Button'

const HeadlessButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

export default HeadlessButton
