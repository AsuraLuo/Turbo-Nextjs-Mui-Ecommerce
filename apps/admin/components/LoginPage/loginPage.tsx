import { Button } from '@mui/material'
import type { SubmitHandler } from 'react-hook-form'

import { IFormContainer } from '@/components/IFormContainer'
import { ITextField } from '@/components/ITextField'

type IFormValues = {
  firstname: string
  lastname: string
}

const LoginPage = () => {
  // const defaultValues: IFormValues = {
  //   firstname: '',
  //   lastname: ''
  // }

  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: 'test'
  // })
  const onFinish: SubmitHandler<IFormValues> = (values) => {
    console.info(values)
  }

  return (
    <IFormContainer onSuccess={onFinish}>
      <div>
        <ITextField name="firstname" required />
      </div>
      <div>
        <ITextField name="lastname" required />
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
