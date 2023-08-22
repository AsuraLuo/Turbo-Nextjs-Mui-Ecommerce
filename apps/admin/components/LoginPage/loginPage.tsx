import { Button } from '@mui/material'
import type { SubmitHandler } from 'react-hook-form'

import IFormContext from '@/components/IFormContext'
import IFormInput from '@/components/IFormInput'

interface IFormData {
  firstname: string
  lastname: string
}

const LoginPage = () => {
  const defaultValues: IFormData = {
    firstname: '',
    lastname: ''
  }

  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: 'test'
  // })

  const onFinish: SubmitHandler<IFormData> = (values) => {
    console.info(values)
  }

  return (
    <IFormContext
      defaultValues={defaultValues}
      formProps={{ reValidateMode: 'onSubmit' }}
      onFinish={onFinish}
    >
      <div>
        <IFormInput name="firstname" required />
      </div>
      <div>
        <IFormInput name="lastname" required />
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
