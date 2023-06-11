import { FC, forwardRef } from 'react'
import Slider, { Settings } from 'react-slick'

import { StyledCarousel } from './styled'

interface CarouselProps extends Settings {
  children: any
  lazyLoad?: any
  nextArrowIcon?: any
  prevArrowIcon?: any
}

const Carousel: FC<CarouselProps> = forwardRef(({ children, ...props }, ref) => {
  const settings: any = {
    arrows: true,
    dots: true,
    infinite: false,
    draggable: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <StyledCarousel>
      <Slider ref={ref} {...settings} {...props}>
        {children}
      </Slider>
    </StyledCarousel>
  )
})

export default Carousel
