import { FC } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import type { ThemeProviderProps } from '@mui/material/styles/ThemeProvider'

const MuiThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
  return <ThemeProvider {...props}>{children}</ThemeProvider>
}

export default MuiThemeProvider
