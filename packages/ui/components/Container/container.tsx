import { FC } from 'react'

import Container, { ContainerProps } from '@mui/material/Container'

const HeadlessContainer: FC<ContainerProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

export default HeadlessContainer
