import { memo } from 'react'
import type { FC, ReactNode, DetailedHTMLProps, FormHTMLAttributes } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import type { UseFormProps } from 'react-hook-form'

type FormProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

interface IFormContextProps extends Omit<FormProps, 'onSubmit' | 'noValidate'> {
  children?: ReactNode
  defaultValues: UseFormProps['defaultValues']
  formProps?: Omit<UseFormProps, 'defaultValues'>
  onFinish?: (values: any) => void
}

const IFormContext: FC<IFormContextProps> = ({
  children,
  defaultValues,
  formProps,
  onFinish,
  ...props
}) => {
  const form = useForm({ defaultValues, ...formProps })
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
