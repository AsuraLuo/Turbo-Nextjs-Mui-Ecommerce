import { forwardRef } from 'react'
import TextField from '@mui/material/TextField'
import type { FC } from 'react'
import type { TextFieldProps } from '@mui/material/TextField'

import { useInputSpace } from './useInputSpace'

const MuiTextField: FC<TextFieldProps> = forwardRef(
  ({ children, ...props }, ref: React.Ref<any>) => {
    const { inputSpaceEvent } = useInputSpace(props)

    return (
      <TextField ref={ref} {...inputSpaceEvent}>
        {children}
      </TextField>
    )
  }
)

export default MuiTextField
