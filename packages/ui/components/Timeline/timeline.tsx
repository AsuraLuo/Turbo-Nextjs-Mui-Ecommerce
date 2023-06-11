import { FC } from 'react'
import Timeline from '@mui/lab/Timeline'
import type { TimelineProps } from '@mui/lab/Timeline'

const MuiTimeline: FC<TimelineProps> = ({ children, ...props }) => {
  return <Timeline {...props}>{children}</Timeline>
}

export default MuiTimeline
