import { FC } from 'react'
import Step from '@mui/material/Step'
import type { StepProps } from '@mui/material/Step'

const MuiStep: FC<StepProps> = ({ children, ...props }) => {
  return <Step {...props}>{children}</Step>
}

export default MuiStep
