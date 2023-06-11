import { FC } from 'react'
import RadioGroup from '@mui/material/RadioGroup'
import type { RadioGroupProps } from '@mui/material/RadioGroup'

const MuiRadioGroup: FC<RadioGroupProps> = ({ children, ...props }) => {
  return <RadioGroup {...props}>{children}</RadioGroup>
}

export default MuiRadioGroup
