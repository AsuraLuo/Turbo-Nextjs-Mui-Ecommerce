import { forwardRef } from 'react'
import TextField from '@mui/material/TextField'
import type { TextFieldProps } from '@mui/material/TextField'

import { useInputSpace } from './useInputSpace'

const MuiTextField: any = forwardRef(
  ({ children, ...props }: TextFieldProps, ref: React.Ref<any>) => {
    const { inputSpaceEvent } = useInputSpace(props)

    return (
      <TextField ref={ref} {...inputSpaceEvent}>
        {children}
      </TextField>
    )
  }
)

export default MuiTextField
