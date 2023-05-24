import {
  BaseCheckbox,
  BaseFileUpload,
  BaseImagesUpload,
  BaseInputNumber,
  BaseTextField,
  BasePassword,
  BaseRadioGroup,
  BaseSwatchRadio,
  BaseSelect,
  LoadingButton
} from '@ocommerce/ui'

import { useLoginPage } from '@hooks/LoginPage'

import { StyledLoginPage } from './styled'

const LoginPage = () => {
  const {
    control,
    errors,
    loading,
    options,
    swatchOptions,
    getValues,
    setValue,
    trigger,
    handleFormSubmit,
    handleOptionChange
    // handleValidEmail,
    // handleValidPassword
  } = useLoginPage()

  return (
    <StyledLoginPage>
      <form noValidate onSubmit={handleFormSubmit}>
        <BaseTextField
          name="email"
          label="Email"
          // required
          control={control}
          errors={errors}
          // validate={handleValidEmail}
        />
        <BasePassword
          name="password"
          label="Password"
          // required
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
          required
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
        <BaseFileUpload name="upload" label="Upload" setValue={setValue} />
        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          loading={loading}
          loadingIndicator={<span>Submit ...</span>}>
          <span>Submit</span>
        </LoadingButton>
      </form>
    </StyledLoginPage>
  )
}

export default LoginPage
