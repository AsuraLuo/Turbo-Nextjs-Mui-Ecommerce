import { FC } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import type { FormControlLabelProps } from '@mui/material/FormControlLabel'

const MuiFormControlLabel: FC<FormControlLabelProps> = ({ ...props }) => {
  return <FormControlLabel {...props} />
}

export default MuiFormControlLabel
