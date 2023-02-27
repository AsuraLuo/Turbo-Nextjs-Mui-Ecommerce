import { FC, useState } from 'react'
import { Waypoint } from 'react-waypoint'

import { StyledLazyed } from './styled'

interface LazyScrollProps {
  children: any
}

const LazyScroll: FC<LazyScrollProps> = ({ children, ...props }) => {
  const [visible, setVisible] = useState(false)

  const handleComponentEnter = () => {
    // If we have already entered before, then we don't do anything.
    if (visible) return

    // Otherwise, we fetch our data and set `_hasEntered` to be true.
    setVisible(true)
  }

  return (
    <Waypoint onEnter={handleComponentEnter} {...props}>
      <StyledLazyed>{visible && children}</StyledLazyed>
    </Waypoint>
  )
}

export default LazyScroll
