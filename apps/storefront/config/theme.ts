import { createTheme } from '@mui/material/styles'

// const config: any = {
//   typography: {
//     pxToRem: (size: number) => `${size / 100}rem`
//   }
// }

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
    htmlFontSize: 100,
    fontFamily: 'karla',
    body1: {
      fontSize: 14
    },
    h4: {
      marginBlockStart: 0,
      marginBlockEnd: 0
    }
    // ...config
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
