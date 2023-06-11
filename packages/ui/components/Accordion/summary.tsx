import { FC } from 'react'

import AccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'

export const MuiAccordionSummary: FC<AccordionSummaryProps> = ({ children, ...props }) => {
  return <AccordionSummary {...props}>{children}</AccordionSummary>
}
