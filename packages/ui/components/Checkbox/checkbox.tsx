import { FC } from 'react'
import Checkbox from '@mui/material/Checkbox'
import type { CheckboxProps } from '@mui/material/Checkbox'

const MuiCheckbox: FC<CheckboxProps> = ({ ...props }) => {
  return <Checkbox {...props} />
}

export default MuiCheckbox
