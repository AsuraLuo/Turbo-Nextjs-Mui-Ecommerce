import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@mui/material'
import type { SubmitHandler } from 'react-hook-form'

import ITextFiled from '@/components/ITextFiled'

interface IFormInput {
  firstname: string
  lastname: string
}

const LoginPage = () => {
  const form = useForm({
    defaultValues: {
      firstname: '',
      lastname: ''
    }
  })
  const { control, handleSubmit } = form
  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: 'test'
  // })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.error(data)
  }

  return (
    <FormProvider {...form}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <ITextFiled name="firstname" control={control} required />
        </div>
        <div>
          <ITextFiled name="lastname" control={control} required />
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
      </form>
    </FormProvider>
  )
}

export default LoginPage
