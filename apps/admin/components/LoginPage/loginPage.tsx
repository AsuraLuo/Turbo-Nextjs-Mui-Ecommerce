import { Button } from '@mui/material'
import type { SubmitHandler } from 'react-hook-form'

import IFormContext from '@/components/IFormContext'
import ITextFiled from '@/components/IFormInput'

interface IFormInput {
  firstname: string
  lastname: string
}

const LoginPage = () => {
  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: 'test'
  // })

  const onFinish: SubmitHandler<IFormInput> = (values: any) => {
    console.info(values)
  }

  return (
    <IFormContext onFinish={onFinish}>
      <div>
        <ITextFiled name="firstname" required />
      </div>
      <div>
        <ITextFiled name="lastname" required />
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
