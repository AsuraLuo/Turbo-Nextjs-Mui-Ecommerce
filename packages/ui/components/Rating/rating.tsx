import { FC } from 'react'
import Rating from '@mui/material/Rating'
import type { RatingProps } from '@mui/material/Rating'

const MuiRating: FC<RatingProps> = ({ ...props }) => {
  return <Rating {...props} />
}

export default MuiRating
