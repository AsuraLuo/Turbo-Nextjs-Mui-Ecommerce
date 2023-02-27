import { FC } from 'react'

import Accordion, { AccordionProps } from '@mui/material/Accordion'

export const HeadlessAccordion: FC<AccordionProps> = ({
  children,
  ...props
}) => {
  return <Accordion {...props}>{children}</Accordion>
}
