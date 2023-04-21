import styled from '@emotion/styled'

export const StyledSwatchRadio = styled('div')(() => ({
  marginBottom: '0.75rem',

  '& .MuiFormControl-root': {
    marginBottom: 0
  },

  '& .MuiFormLabel-root': {
    display: 'flex',
    justifyContent: 'flex-start'
  }
}))

export const StyledSwatchLabel = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
  order: 3;
`
