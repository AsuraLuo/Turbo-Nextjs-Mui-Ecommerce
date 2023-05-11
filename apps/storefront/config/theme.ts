import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1536
    }
  },
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    }
  },
  typography: {
    fontFamily: 'karla',
    body1: {
      fontSize: 14
    },
    h4: {
      marginBlockStart: 0,
      marginBlockEnd: 0
    }
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: 0.16
        }
      }
    }
  }
})
