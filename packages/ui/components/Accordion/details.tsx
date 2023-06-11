import { FC } from 'react'
import AccordionDetails from '@mui/material/AccordionDetails'
import type { AccordionDetailsProps } from '@mui/material/AccordionDetails'

export const MuiAccordionDetails: FC<AccordionDetailsProps> = ({ children, ...props }) => {
  return <AccordionDetails {...props}>{children}</AccordionDetails>
}

export default MuiAccordionDetails
