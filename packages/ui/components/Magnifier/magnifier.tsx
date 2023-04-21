import { FC } from 'react'
import {
  GlassMagnifier,
  SideBySideMagnifier,
  Magnifier as RIMagnifier
} from 'react-image-magnifiers'

const WebsiteConf = {
  product: {
    magnifierTypes: 'magnifier'
  }
}

interface MagnifierProps {
  className?: string
  imageSrc: string
  imageAlt?: string
  largeImageSrc?: string
  type?: string
}

const {
  product: { magnifierTypes }
} = WebsiteConf
const { magnifier, glassMagnifier, sideBySideMagnifier } = magnifierTypes

const MagnifierTypes: any = {
  magnifier: {
    Component: RIMagnifier,
    ...magnifier
  },
  glassMagnifier: {
    Component: GlassMagnifier,
    ...glassMagnifier
  },
  sideBySideMagnifier: {
    Component: SideBySideMagnifier,
    ...sideBySideMagnifier
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
