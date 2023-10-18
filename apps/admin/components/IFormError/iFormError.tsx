import { createContext, useContext, useMemo } from 'react'
import type { FC, PropsWithChildren } from 'react'
import type { FieldError } from 'react-hook-form'

export type IFormErrorProps = {
  onError: (error: FieldError) => string | undefined
}

const IFormErrorContext = createContext<IFormErrorProps>({
  onError: (error: FieldError) => error?.message
})

const IFormError: FC<PropsWithChildren<IFormErrorProps>> = ({ children, onError }) => {
  const contextValue = useMemo(() => {
    return { onError }
  }, [onError])

  return <IFormErrorContext.Provider value={contextValue}>{children}</IFormErrorContext.Provider>
}

export default IFormError

export const useIFormError = () => {
  const error = useContext<IFormErrorProps>(IFormErrorContext)
  return error?.onError
}
