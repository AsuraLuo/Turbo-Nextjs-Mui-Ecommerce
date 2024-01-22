import NextErrorComponent from 'next/error'
import * as Sentry from '@sentry/nextjs'

// eslint-disable-next-line react/destructuring-assignment
const ErrorPage = (props: any) => <NextErrorComponent statusCode={props.statusCode} />

ErrorPage.getInitialProps = async (context: any) => {
  // In case this is running in a serverless function, await this in order to give Sentry
  // time to send the error before the lambda exits
  await Sentry.captureUnderscoreErrorException(context)

  // This will contain the status code of the response
  return NextErrorComponent.getInitialProps(context)
}

export default ErrorPage
