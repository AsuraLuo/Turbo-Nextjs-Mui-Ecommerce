import { FC } from 'react'
import AccordionSummary from '@mui/material/AccordionSummary'
import type { AccordionSummaryProps } from '@mui/material/AccordionSummary'

const MuiAccordionSummary: FC<AccordionSummaryProps> = ({ children, ...props }) => {
  return <AccordionSummary {...props}>{children}</AccordionSummary>
}

export default MuiAccordionSummary
