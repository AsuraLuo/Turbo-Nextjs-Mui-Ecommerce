import { FC } from 'react'
import Switch from '@mui/material/Switch'
import type { SwitchProps } from '@mui/material/Switch'

const MuiSwitch: FC<SwitchProps> = ({ ...props }) => {
  return <Switch {...props} />
}

export default MuiSwitch
