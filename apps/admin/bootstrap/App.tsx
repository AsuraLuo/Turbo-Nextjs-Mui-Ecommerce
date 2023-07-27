import { ThemeProvider } from '@emotion/react'

import AppShell from '@/components/AppShell'

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <AppShell />
    </ThemeProvider>
  )
}

export default App
