import { FC } from 'react'
import Chip from '@mui/material/Chip'
import type { ChipProps } from '@mui/material/Chip'

const MuiChip: FC<ChipProps> = ({ ...props }) => {
  return <Chip {...props} />
}

export default MuiChip
