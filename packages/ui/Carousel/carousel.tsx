/* eslint-disable react/prop-types */
import { FC, forwardRef } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import Slider, { Settings } from 'react-slick'

import Arrow from './arrow'
import { StyledCarousel } from './styled'

interface CarouselProps extends Settings {
  children: any
  lazyLoad?: any
  nextArrowIcon?: any
  prevArrowIcon?: any
}

const Carousel: FC<CarouselProps> = forwardRef(
  (
    {
      children,
      nextArrowIcon = ArrowRight,
      prevArrowIcon = ArrowLeft,
      ...props
    },
    ref
  ) => {
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
      ],
      nextArrow: <Arrow icon={nextArrowIcon} />,
      prevArrow: <Arrow icon={prevArrowIcon} />
    }

    return (
      <StyledCarousel>
        <Slider ref={ref} {...settings} {...props}>
          {children}
        </Slider>
      </StyledCarousel>
    )
  }
)

export default Carousel
