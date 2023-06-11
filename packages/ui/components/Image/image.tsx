import { FC } from 'react'
import LazyLoad, { LazyLoadProps } from 'react-lazyload'

interface ImageProps extends LazyLoadProps {
  src: string
  alt?: string
  onClick?: any
}

const Image: FC<ImageProps> = ({ className, src, alt, onClick, ...props }) => {
  return (
    <LazyLoad once {...props}>
      <picture aria-hidden="true" onClick={onClick}>
        <img className={className} src={src} alt={alt} />
      </picture>
    </LazyLoad>
  )
}

export default Image
