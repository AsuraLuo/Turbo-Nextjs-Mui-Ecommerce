import { Button } from '@mui/material'
import type { SubmitHandler } from 'react-hook-form'

import IFormContext from '@/components/IFormContext'
import IFormInput from '@/components/IFormInput'

type IFormValues = {
  firstname: string
  lastname: string
}

const LoginPage = () => {
  const defaultValues: IFormValues = {
    firstname: '',
    lastname: ''
  }

  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: 'test'
  // })
  const validEmail = (value: string) => {
    const regexp: RegExp =
      /^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i

    return regexp.test(value) || 'Please enter a valid email address.'
  }

  const onFinish: SubmitHandler<IFormValues> = (values) => {
    console.info(values)
  }

  return (
    <IFormContext defaultValues={defaultValues} onFinish={onFinish}>
      <div>
        <IFormInput name="firstname" rules={{ required: true, validate: validEmail }} />
      </div>
      <div>
        <IFormInput name="lastname" rules={{ required: true }} />
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
    </IFormContext>
  )
}

export default LoginPage
