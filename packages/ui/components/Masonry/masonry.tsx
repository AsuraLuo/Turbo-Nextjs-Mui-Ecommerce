import { FC } from 'react'
import Masonry from '@mui/lab/Masonry'
import type { MasonryProps } from '@mui/lab/Masonry'

const MuiMasonry: FC<MasonryProps> = ({ children, ...props }) => {
  return <Masonry {...props}>{children}</Masonry>
}

export default MuiMasonry
