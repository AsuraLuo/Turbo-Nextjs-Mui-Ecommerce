import styled from '@emotion/styled'

export const StyleInputNumber = styled.div`
  display: grid;
  max-width: 14rem;
  margin: 0.75rem 0;
  grid-auto-flow: column;

  .MuiFormControl-root {
    margin-bottom: 0;
  }

  .MuiButtonBase-root {
    border-radius: 0;
  }

  .MuiInputBase-root {
    min-width: 1.875rem;
    border-radius: 0;
  }

  .MuiInputBase-input {
    padding: 0.5625rem 0.875rem;
    text-align: center;
  }
`
