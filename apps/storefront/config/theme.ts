import { createTheme } from '@mui/material/styles'

const config: any = {
  typography: {
    pxToRem: (size: number) => `${size / 16}rem`
  }
}

export const theme = createTheme({
  ...config,
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
    htmlFontSize: 16,
    fontFamily: 'karla',
    h4: {
      marginBlockStart: 0,
      marginBlockEnd: 0
    },
    ...config.typography
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: '1rem'
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          height: '1.0375em'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: '0.3125rem',
          marginLeft: 0,
          marginRight: 0,
          fontSize: '0.875rem'
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          textAlign: 'left'
        }
      }
    }
  }
})
