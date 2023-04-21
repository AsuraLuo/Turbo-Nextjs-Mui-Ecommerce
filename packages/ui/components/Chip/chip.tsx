import { FC } from 'react'

import Chip, { ChipProps } from '@mui/material/Chip'

const HeadlessChip: FC<ChipProps> = ({ ...props }) => {
  return <Chip {...props} />
}

export default HeadlessChip
