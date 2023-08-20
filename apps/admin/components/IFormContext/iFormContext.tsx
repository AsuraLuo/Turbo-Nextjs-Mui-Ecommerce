import { memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import type { FC, ReactNode, DetailedHTMLProps, FormHTMLAttributes } from 'react'
import type { UseFormProps, FieldValues } from 'react-hook-form'

interface FormProps
  extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

interface IFormContextProps extends Omit<FormProps, 'onSubmit' | 'noValidate'> {
  children?: ReactNode
  defaultValues: UseFormProps<FieldValues, any>
  onFinish?: (values: any) => void
}

const IFormContext: FC<IFormContextProps> = ({ children, defaultValues, onFinish, ...props }) => {
  const form = useForm({ defaultValues })
  const { handleSubmit } = form

  const handleFormSubmit = (values: any) => {
    onFinish?.(values)
  }

  return (
    <FormProvider {...form}>
      <form {...props} noValidate onSubmit={handleSubmit(handleFormSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

export default memo(IFormContext)
