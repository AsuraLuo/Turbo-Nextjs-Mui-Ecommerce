import { FC } from 'react'
import Container from '@mui/material/Container'
import type { ContainerProps } from '@mui/material/Container'

const MuiContainer: FC<ContainerProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

export default MuiContainer
