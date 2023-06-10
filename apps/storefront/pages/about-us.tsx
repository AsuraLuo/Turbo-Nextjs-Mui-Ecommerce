import Head from 'next/head'
import * as Sentry from '@sentry/nextjs'

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div>
        <p>About Us Page</p>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  try {
    throw new Error('SSR Test Errors')
  } catch (error) {
    Sentry.captureException(error)

    // Flushing before returning is necessary if deploying to Vercel, see
    // https://vercel.com/docs/platform/limits#streaming-responses
    await Sentry.flush(2000)
  }

  return { props: {} }
}

export default AboutUs
