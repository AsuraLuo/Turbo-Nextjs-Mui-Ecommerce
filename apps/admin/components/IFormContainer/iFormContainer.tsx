import { FormProvider, useForm } from 'react-hook-form'
import type { ReactNode, FormEventHandler, FormHTMLAttributes } from 'react'
import type {
  UseFormProps,
  UseFormReturn,
  SubmitErrorHandler,
  SubmitHandler
} from 'react-hook-form'
import type { FieldValues } from 'react-hook-form/dist/types/fields'

export type IFormContainerProps<T extends FieldValues = FieldValues> = UseFormProps<T> & {
  children?: ReactNode
  formProps?: FormHTMLAttributes<HTMLFormElement>
  formContext?: UseFormReturn<T>
  onSuccess?: SubmitHandler<T>
  onError?: SubmitErrorHandler<T>
  handleSubmit?: FormEventHandler<HTMLFormElement>
}

export const IFormContainerWithoutContext = <TFieldValues extends FieldValues = FieldValues>({
  children,
  formProps,
  onSuccess,
  onError,
  ...useFormProps
}: IFormContainerProps<TFieldValues>) => {
  const methods = useForm<TFieldValues>({
    ...useFormProps
  })
  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(
          onSuccess || (() => console.info('submit handler `onSuccess` is missing')),
          onError
        )}
        noValidate
        {...formProps}
      >
        {children}
      </form>
    </FormProvider>
  )
}

const IFormContainer = <TFieldValues extends FieldValues = FieldValues>({
  children,
  formProps,
  formContext,
  onSuccess,
  onError,
  handleSubmit,
  ...useFormProps
}: IFormContainerProps<TFieldValues>) => {
  if (!formContext) {
    return (
      <IFormContainerWithoutContext<TFieldValues>
        {...{ children, formProps, onSuccess, onError, ...useFormProps }}
      />
    )
  }

  if (typeof onSuccess === 'function' && typeof handleSubmit === 'function') {
    console.warn('Property `onSuccess` will be ignored because handleSubmit is provided')
  }

  return (
    <FormProvider {...formContext}>
      <form
        noValidate
        {...formProps}
        onSubmit={
          handleSubmit ||
          (onSuccess
            ? formContext.handleSubmit(onSuccess, onError)
            : () => console.info('submit handler `onSuccess` is missing'))
        }
      >
        {children}
      </form>
    </FormProvider>
  )
}

export default IFormContainer
