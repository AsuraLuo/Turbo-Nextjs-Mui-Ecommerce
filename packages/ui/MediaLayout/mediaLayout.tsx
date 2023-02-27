import { FC, ReactNode } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

interface MediaProps {
  children: ReactNode
  media: string
}

const MediaLayout: FC<MediaProps> = ({ children, media }) => {
  const matches = useMediaQuery(media)

  return <>{matches ? children : null}</>
}

export default MediaLayout
