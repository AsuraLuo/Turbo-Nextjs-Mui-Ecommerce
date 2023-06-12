import { FC } from 'react'
import ReactPlayer from 'react-player'
import type { ReactPlayerProps } from 'react-player'

const VideoPlayer: FC<ReactPlayerProps> = ({
  url = '',
  playing = false,
  loop = false,
  controls = false,
  muted = false,
  playbackRate = 1,
  width = '100%',
  height = '360px',
  playsinline = false,
  ...props
}) => {
  return (
    <ReactPlayer
      url={url}
      playing={playing}
      loop={loop}
      controls={controls}
      muted={muted}
      playbackRate={playbackRate}
      width={width}
      height={height}
      playsinline={playsinline}
      {...props}
    />
  )
}

export default VideoPlayer
