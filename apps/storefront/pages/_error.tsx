import { captureUnderscoreErrorException } from '@sentry/nextjs'
import NextErrorComponent from 'next/error'
import type { ErrorProps } from 'next/error'

const ErrorComponent = ({ statusCode }: ErrorProps) => {
  return <NextErrorComponent statusCode={statusCode} />
}

ErrorComponent.getInitialProps = async (contextData) => {
  // In case this is running in a serverless function, await this in order to give Sentry
  // time to send the error before the lambda exits
  await captureUnderscoreErrorException(contextData)

  // This will contain the status code of the response
  return NextErrorComponent.getInitialProps(contextData)
}

export default ErrorComponent
