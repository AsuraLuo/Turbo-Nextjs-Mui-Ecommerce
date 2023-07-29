import { FC } from 'react'
import TextField from '@mui/material/TextField'
import type { TextFieldProps } from '@mui/material/TextField'

import { useInputSpace } from './useInputSpace'

const MuiTextField: FC<TextFieldProps> = ({ children, ...props }) => {
  const { inputProps, ...rest } = props || {}
  const { inputSpaceEvent } = useInputSpace(inputProps)

  return (
    <TextField {...rest} inputProps={{ ...inputSpaceEvent }}>
      {children}
    </TextField>
  )
}

export default MuiTextField
