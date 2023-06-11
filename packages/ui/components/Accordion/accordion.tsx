import { FC } from 'react'
import Accordion from '@mui/material/Accordion'
import type { AccordionProps } from '@mui/material/Accordion'

const MuiAccordion: FC<AccordionProps> = ({ children, ...props }) => {
  return <Accordion {...props}>{children}</Accordion>
}

export default MuiAccordion
