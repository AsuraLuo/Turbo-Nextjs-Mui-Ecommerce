import { FC, useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'

import Magnifier from '../Magnifier'
// import VideoPlayer from '../VideoPlayer'
import { StyledGallery, RenderItem } from './styled'

interface GalleryProps {
  images: any[]
  lazyLoad?: boolean
  showNav?: boolean
  showThumbnails?: boolean
  showPlayButton?: boolean
  thumbnailPosition?: string
}

const Gallery: FC<GalleryProps> = ({
  images,
  lazyLoad = true,
  showNav = true,
  showThumbnails = true,
  showPlayButton = false,
  thumbnailPosition = 'left',
  ...props
}) => {
  const [galleryThumbnailPosition, setGalleryThumbnailPosition] = useState<any>('bottom')

  // Set gallery thumbnail position
  useEffect(() => {
    if (images.length > 0) {
      setTimeout(() => {
        setGalleryThumbnailPosition(thumbnailPosition)
      }, 18)
    }
  }, [images.length, thumbnailPosition])

  const renderItem = (item: any) => {
    return (
      <RenderItem className="render__item">
        <picture>
          <img className="image-gallery-image" src={item.original} alt={item.label} />
        </picture>
        {/* {item.video ? (
          <VideoPlayer url={item.video.video_url} />
        ) : ( */}
        <Magnifier
          className="image-magnifier"
          imageSrc={item.thumbnail}
          largeImageSrc={item.original}
        />
        {/* )} */}
      </RenderItem>
    )
  }

  return (
    <StyledGallery>
      <ImageGallery
        items={images}
        lazyLoad={lazyLoad}
        showNav={showNav}
        showThumbnails={showThumbnails}
        showPlayButton={showPlayButton}
        renderItem={renderItem}
        thumbnailPosition={galleryThumbnailPosition}
        {...props}
      />
    </StyledGallery>
  )
}

export default Gallery
