import { FC } from 'react'
import StepLabel from '@mui/material/StepLabel'
import type { StepLabelProps } from '@mui/material/StepLabel'

const MuiStepLabel: FC<StepLabelProps> = ({ children, ...props }) => {
  return <StepLabel {...props}>{children}</StepLabel>
}

export default MuiStepLabel
