import { FC } from 'react'
import StepContent from '@mui/material/StepContent'
import type { StepContentProps } from '@mui/material/StepContent'

const MuiStepContent: FC<StepContentProps> = ({ children, ...props }) => {
  return <StepContent {...props}>{children}</StepContent>
}

export default MuiStepContent
