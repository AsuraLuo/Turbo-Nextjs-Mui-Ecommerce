import { FC } from 'react'

import AccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails'

export const MuiAccordionDetails: FC<AccordionDetailsProps> = ({ children, ...props }) => {
  return <AccordionDetails {...props}>{children}</AccordionDetails>
}
