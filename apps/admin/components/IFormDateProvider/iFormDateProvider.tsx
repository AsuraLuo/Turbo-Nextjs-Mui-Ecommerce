import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers'
import type { LocalizationProviderProps, MuiPickersAdapter } from '@mui/x-date-pickers'

export type IFormDateProviderProps<TDate> = Omit<
  LocalizationProviderProps<TDate, any>,
  'dateAdapter'
> & {
  dateAdapter?: new (...args: any) => MuiPickersAdapter<TDate>
}

const IFormDateProvider = ({ children, ...props }: IFormDateProviderProps<Date>) => {
  const { dateAdapter, ...localizationProps } = props
  return (
    <LocalizationProvider dateAdapter={dateAdapter || AdapterDateFns} {...localizationProps}>
      {children}
    </LocalizationProvider>
  )
}

export default IFormDateProvider
