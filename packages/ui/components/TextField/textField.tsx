import { forwardRef } from 'react'
import TextField from '@mui/material/TextField'
import type { TextFieldProps } from '@mui/material/TextField'

import { useInputSpace } from './useInputSpace'

type MuiTextFieldProps = TextFieldProps & {
  tirmSpace?: boolean
}

const MuiTextField: any = forwardRef(
  ({ children, ...props }: MuiTextFieldProps, ref: React.Ref<any>) => {
    const { tirmSpace, ...rest } = props
    const { inputSpaceEvent } = useInputSpace(rest)
    const inputProps = tirmSpace ? inputSpaceEvent : rest

    return (
      <TextField ref={ref} {...inputProps}>
        {children}
      </TextField>
    )
  }
)

export default MuiTextField
