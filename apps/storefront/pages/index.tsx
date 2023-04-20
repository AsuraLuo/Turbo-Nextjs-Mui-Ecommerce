import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@ocommerce/ui'

const Home = () => {
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
      <div>
        <Link href="/about-us" title="About Us">
          <Button variant="contained" type="button">
            About Us
          </Button>
        </Link>
      </div>
    </>
  )
}

export default Home
