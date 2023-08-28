import { useEffect } from 'react'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'

import IFormContainer from '@/components/IFormContainer'
import ITextField from '@/components/ITextField'
import IFormCheckbox from '@/components/IFormCheckbox'
import IFormRadioGroup from '@/components/IFormRadioGroup'

type IFormValues = {
  firstname: string
  lastname: string
  gender: string
  agree: boolean
}

const LoginPage = () => {
  const formContext = useForm<IFormValues>({
    defaultValues: {
      firstname: '',
      lastname: '',
      gender: '',
      agree: false
    }
  })

  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: 'test'
  // })
  const onFinish: SubmitHandler<IFormValues> = (values) => {
    console.info(values)
  }

  useEffect(() => {
    formContext.setValue('firstname', '123')
  }, [formContext])

  return (
    <IFormContainer formContext={formContext} onSuccess={onFinish}>
      <div>
        <ITextField name="firstname" label="First Name" required />
      </div>
      <div>
        <ITextField type="email" name="lastname" label="Last Name" required />
      </div>
      <div>
        <IFormRadioGroup
          name="gender"
          label="Gender"
          options={[
            {
              id: 'man',
              label: 'Man'
            },
            {
              id: 'women',
              label: 'Women'
            }
          ]}
          required
        />
      </div>
      <div>
        <IFormCheckbox name="agree" label="agree with this conditions" required />
      </div>
      {/* {fields.map((field, index) => {
        const name = `test.${index}.firstname`
        return (
          <div key={field.id}>
            <Controller
              name={name}
              control={control}
              rules={{ required: 'This field is required.' }}
              render={({ field, fieldState: { error } }) => {
                return (
                  <TextField
                    {...field}
                    required
                    error={!!error}
                    helperText={error?.message ?? null}
                  />
                )
              }}
            />
            <Button type="button" onClick={() => remove(index)}>
              prepend
            </Button>
          </div>
        )
      })}
      <Button
        type="button"
        onClick={() =>
          append(
            {
              firstname: ''
            },
            { shouldFocus: false }
          )
        }>
        append
      </Button> */}
      <Button type="submit">
        <span>Submit</span>
      </Button>
    </IFormContainer>
  )
}

export default LoginPage
