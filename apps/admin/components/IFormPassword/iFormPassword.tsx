import { useState } from 'react'
import { IconButton, InputAdornment } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import type { MouseEvent, ReactNode } from 'react'
import type { IconButtonProps } from '@mui/material'
import type { FieldValues } from 'react-hook-form/dist/types/fields'

import IFormTextField, { ITextFieldProps } from '../ITextField'

export type IFormPasswordProps<T extends FieldValues> = ITextFieldProps<T> & {
  iconColor?: IconButtonProps['color']
  renderIcon?: (password: boolean) => ReactNode
}

const RenderIcon = (password: boolean) => (password ? <Visibility /> : <VisibilityOff />)

const IFormPassword = <TFieldValues extends FieldValues>({
  iconColor,
  renderIcon = RenderIcon,
  ...props
}: IFormPasswordProps<TFieldValues>) => {
  const [password, setPassword] = useState<boolean>(true)

  const handleOnMouseDown = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleOnClick = () => {
    setPassword((prev: boolean) => !prev)
  }

  return (
    <IFormTextField
      {...props}
      type={password ? 'password' : 'text'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              tabIndex={-1}
              color={iconColor ?? 'default'}
              onMouseDown={handleOnMouseDown}
              onClick={handleOnClick}
            >
              {renderIcon(password)}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
}

export default IFormPassword
