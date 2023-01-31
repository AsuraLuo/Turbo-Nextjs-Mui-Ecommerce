import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { formatMessage } from '@ecommerce/ui'

export const useLoginPage = () => {
  const {
    control,
    formState: { errors },
    setValue,
    trigger,
    handleSubmit
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      option: '',
      radio: '',
      checkbox: false
    }
  })
  const [loading, setLoading] = useState<boolean>(false)

  const handleValidEmail = (value: string) => {
    const regexp: RegExp =
      /^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i

    return regexp.test(value) || formatMessage({ id: 'validate.email' })
  }

  const handleValidPassword = (value: string) => {
    let counter: number = 0
    const minLength: number = 6
    const minCharacterSets: number = 3

    if (value.length < minLength) {
      return formatMessage(
        { id: 'validate.passwordLenth' },
        {
          number: minLength
        }
      )
    }

    if (value.match(/\d+/)) counter++
    if (value.match(/[a-z]+/)) counter++
    if (value.match(/[A-Z]+/)) counter++
    if (value.match(/[^a-zA-Z0-9]+/)) counter++

    return (
      counter >= minCharacterSets ||
      formatMessage(
        { id: 'validate.password' },
        {
          number: minCharacterSets
        }
      )
    )
  }

  const handleFormSubmit = handleSubmit(async (values: any) => {
    setLoading(true)
    console.info(values)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

  return {
    control,
    errors,
    loading,
    setValue,
    trigger,
    handleFormSubmit,
    handleValidEmail,
    handleValidPassword
  }
}
