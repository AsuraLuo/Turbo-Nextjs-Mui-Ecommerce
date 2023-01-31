import {
  BaseCheckbox,
  BaseTextField,
  BasePassword,
  BaseRadioGroup,
  BaseSelect,
  LoadingButton
} from '@ecommerce/ui'

import { useLoginPage } from '@hooks/LoginPage'

import { StyledLoginPage } from './styled'

const LoginPage = () => {
  const {
    control,
    errors,
    loading,
    setValue,
    trigger,
    handleFormSubmit,
    handleValidEmail,
    handleValidPassword
  } = useLoginPage()
  const options = [
    {
      label: 'Angular',
      value: 'angular'
    },
    {
      label: 'React',
      value: 'react'
    },
    {
      label: 'Vue',
      value: 'vue'
    }
  ]

  return (
    <StyledLoginPage>
      <form noValidate onSubmit={handleFormSubmit}>
        <BaseTextField
          name="email"
          label="Email"
          required
          control={control}
          errors={errors}
          validate={handleValidEmail}
        />
        <BasePassword
          name="password"
          label="Password"
          required
          control={control}
          errors={errors}
          validate={handleValidPassword}
        />
        <BaseSelect
          name="option"
          label="Option"
          required
          control={control}
          errors={errors}
          options={options}
          setValue={setValue}
          trigger={trigger}
        />
        <BaseRadioGroup
          name="radio"
          required
          control={control}
          errors={errors}
          options={options}
        />
        <div>
          <BaseCheckbox
            name="checkbox"
            label="Checkbox"
            required
            control={control}
            errors={errors}
            setValue={setValue}
            trigger={trigger}
          />
        </div>
        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          loading={loading}
          loadingIndicator={<span>Submit ...</span>}
        >
          <span>Submit</span>
        </LoadingButton>
      </form>
    </StyledLoginPage>
  )
}

export default LoginPage
