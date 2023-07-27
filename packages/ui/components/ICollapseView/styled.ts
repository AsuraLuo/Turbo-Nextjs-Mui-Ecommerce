import styled from '@emotion/styled'

interface StyledCollapseViewProps {
  negativeMargin: boolean
}

export const StyledCollapseView = styled.div<StyledCollapseViewProps>`
  margin-bottom: ${(props) => (props.negativeMargin ? '-15px' : '0')};
`

export const StyledCollapseIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
  }
`
