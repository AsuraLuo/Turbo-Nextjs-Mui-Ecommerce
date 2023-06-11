import { FC } from 'react'
import Slider from '@mui/material/Slider'
import type { SliderProps } from '@mui/material/Slider'

const MuiSlider: FC<SliderProps> = ({ children, ...props }) => {
  return <Slider {...props}>{children}</Slider>
}

export default MuiSlider
