import { FC } from 'react'

import Icon from '../Icon'
import { StyledArrow } from './styled'

interface ArrowProps {
  className?: string
  width?: number
  height?: number
  icon: any
  style?: any
  onClick?: any
}

const Arrow: FC<ArrowProps> = ({ className, width, height, icon, style, onClick }) => {
  const mergeStyle = { ...style, width, height }

  return (
    <StyledArrow className={className} style={mergeStyle}>
      <div aria-hidden="true" role="button" className="arrow" onClick={onClick}>
        <Icon src={icon} size={28} />
      </div>
    </StyledArrow>
  )
}

export default Arrow
