import { useEffect, useRef, useState } from 'react'
import Collapse from '@mui/material/Collapse'
import { ExpandMore, ExpandLess } from '@mui/icons-material'
import type { FC } from 'react'
import type { CollapseProps } from '@mui/material/Collapse'

import { StyledCollapseView, StyledCollapseIcon } from './styled'

interface ICollapseViewProps extends Omit<CollapseProps, 'collapsedSize' | 'in'> {
  size?: number
  negativeMargin?: boolean
}

const ICollapseView: FC<ICollapseViewProps> = ({
  children,
  size = 0,
  negativeMargin = false,
  ...props
}) => {
  const ref = useRef(null)
  const [render, setRender] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)

  const handleToggle = () => {
    setVisible((prev: boolean) => !prev)
  }

  useEffect(() => {
    const element: any = ref.current
    const target: any = element.lastChild.lastChild
    setRender(target.clientHeight > size)
  }, [children, size])

  return (
    <StyledCollapseView negativeMargin={negativeMargin}>
      <Collapse {...props} ref={ref} collapsedSize={size} in={visible}>
        {children}
      </Collapse>
      {render && (
        <StyledCollapseIcon onClick={handleToggle}>
          {visible ? <ExpandLess /> : <ExpandMore />}
        </StyledCollapseIcon>
      )}
    </StyledCollapseView>
  )
}

export default ICollapseView
