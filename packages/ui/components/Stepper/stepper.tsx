import { FC } from 'react'
import Stepper from '@mui/material/Stepper'
import type { StepperProps } from '@mui/material/Stepper'

const MuiStepper: FC<StepperProps> = ({ children, ...props }) => {
  return <Stepper {...props}>{children}</Stepper>
}

export default MuiStepper
