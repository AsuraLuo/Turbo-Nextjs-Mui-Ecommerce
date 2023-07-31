import { useEffect, FC, ReactNode, memo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import { useSnackbar } from 'notistack'

import { theme } from '@config/theme'
import { CssBaseline, CurrentLocale, INextPerformance } from '@ocommerce/ui'

import GlobalStyled from '@components/GlobalStyled'
import { StyledMain } from './styled'

interface AppShellProps {
  children: ReactNode
  cache: any
}

const AppShell: FC<AppShellProps> = ({ children, cache }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }

    window.snackbar = {
      open: (message: any, options: any = {}) => enqueueSnackbar(message, options),
      close: (key: any) => closeSnackbar(key)
    }
  }, [closeSnackbar, enqueueSnackbar])

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CurrentLocale />
        <GlobalStyled />
        <StyledMain>{children}</StyledMain>
        <INextPerformance />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default memo(AppShell)
