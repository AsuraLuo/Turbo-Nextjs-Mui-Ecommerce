import Head from 'next/head'
import Link from 'next/link'
import * as Sentry from '@sentry/nextjs'

import { Button } from '@ocommerce/ui'

const Home = () => {
  const onClick = () => {
    const transaction = Sentry.startTransaction({
      name: 'Testing performance'
    })
    Sentry.configureScope((scope) => {
      scope.setSpan(transaction)
    })

    try {
      // Some operation the button does, but fails
      throw new Error('Client Test 5')
    } catch (error) {
      Sentry.captureException(error)
    } finally {
      transaction.finish()
    }
  }

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        <Link href="/login" title="Login Page">
          Login Page
        </Link>
      </div>
      <div style={{ marginBottom: 30 }}>
        <Button variant="contained" type="button" onClick={onClick}>
          About Us
        </Button>
      </div>
      {/* <TextField label="Hot Key" placeholder="Enter key worlds..." defaultValue="key" /> */}
    </>
  )
}

export default Home
