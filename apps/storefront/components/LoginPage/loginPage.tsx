import {
  BaseAutoComplete,
  // BaseTextField,
  // BaseCheckbox,
  // BaseFileUpload,
  // BaseImagesUpload,
  // BaseInputNumber,
  // BasePassword,
  // BaseRadioGroup,
  // BaseSwatchRadio,
  // BaseSelect,
  LoadingButton
} from '@ocommerce/ui'

import { useLoginPage } from '@hooks/LoginPage'

import { StyledLoginPage } from './styled'

const LoginPage = () => {
  const {
    control,
    errors,
    loading,
    // options,
    // swatchOptions,
    // getValues,
    // setValue,
    // trigger,
    handleFormSubmit
    // handleOptionChange
    // handleValidEmail,
    // handleValidPassword
  } = useLoginPage()
  const options: any[] = ['admin@qq.com', 'test@qq.com', 'pwa@qq.com']

  const validEmail = (value: string) => {
    const regexp: RegExp =
      // eslint-disable-next-line no-useless-escape
      /^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i

    return regexp.test(value) || 'Please enter a valid email address.'
  }

  return (
    <StyledLoginPage>
      <form noValidate onSubmit={handleFormSubmit}>
        <BaseAutoComplete
          name="email"
          label="Search input"
          required
          options={options}
          control={control}
          errors={errors}
          validate={validEmail}
        />
        {/* <BaseTextField
          name="email"
          label="Email"
          required
          control={control}
          errors={errors}
          validate={validEmail}
          validate={handleValidEmail}
        /> */}
        {/* <BasePassword
          name="password"
          label="Password"
          required
          control={control}
          errors={errors}
          // validate={handleValidPassword}
        />
        <BaseSelect
          name="option"
          label="Option"
          // required
          control={control}
          errors={errors}
          options={options}
          setValue={setValue}
          trigger={trigger}
        />
        <BaseImagesUpload
          name="images"
          label="Images"
          // required
          control={control}
          errors={errors}
          setValue={setValue}
          trigger={trigger}
        />
        <BaseRadioGroup
          name="radio"
          // required
          control={control}
          errors={errors}
          options={options}
        />
        <div>
          <BaseCheckbox
            name="checkbox"
            label="Checkbox"
            // required
            control={control}
            errors={errors}
            setValue={setValue}
            trigger={trigger}
          />
        </div>
        <BaseInputNumber
          name="quantity"
          label="Quantity"
          // required
          step={5}
          min={5}
          max={100}
          control={control}
          errors={errors}
          getValues={getValues}
          setValue={setValue}
        />
        {swatchOptions.map((option) => {
          return (
            <BaseSwatchRadio
              key={option.value}
              name={option.value}
              label={option.label}
              // required
              options={option.options}
              control={control}
              errors={errors}
              handleOptionChange={handleOptionChange}
            />
          )
        })}
        <BaseFileUpload name="upload" label="Upload" setValue={setValue} /> */}
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
