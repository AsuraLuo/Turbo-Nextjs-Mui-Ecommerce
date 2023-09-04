import { Path, useWatch } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types/fields'

import PasswordElement, { IFormPasswordProps } from '../IFormPassword'

export type PasswordRepeatElementProps<T extends FieldValues> = IFormPasswordProps<T> & {
  passwordFieldName: Path<T>
  customInvalidFieldMessage?: string
}

const IFormPasswordRepeat = <TFieldValues extends FieldValues>({
  passwordFieldName,
  customInvalidFieldMessage,
  ...rest
}: PasswordRepeatElementProps<TFieldValues>) => {
  const pwValue = useWatch({
    name: passwordFieldName,
    control: rest.control
  })
  const invalidFieldMessage = customInvalidFieldMessage ?? 'Password should match'
  return (
    <PasswordElement
      {...rest}
      validation={{
        validate: (value: string) => {
          return value === pwValue || invalidFieldMessage
        }
      }}
    />
  )
}

export default IFormPasswordRepeat
