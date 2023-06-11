import { FC } from 'react'
import {
  GlassMagnifier,
  SideBySideMagnifier,
  Magnifier as RIMagnifier
} from 'react-image-magnifiers'

interface MagnifierProps {
  className?: string
  imageSrc: string
  imageAlt?: string
  largeImageSrc?: string
  type?: string
}

const MagnifierTypes: any = {
  magnifier: {
    Component: RIMagnifier
  },
  glassMagnifier: {
    Component: GlassMagnifier
  },
  sideBySideMagnifier: {
    Component: SideBySideMagnifier
  }
}

const Magnifier: FC<MagnifierProps> = ({
  imageSrc,
  imageAlt = '',
  largeImageSrc = '',
  type = 'glassMagnifier',
  ...props
}) => {
  const { Component, ...rest } = MagnifierTypes[type]

  return (
    <Component
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      largeImageSrc={largeImageSrc}
      {...rest}
      {...props}
    />
  )
}

export default Magnifier
