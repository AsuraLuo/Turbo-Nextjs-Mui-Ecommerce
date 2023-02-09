import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <div>
          <Link href="/login" title="Login Page">
            Login Page
          </Link>
        </div>
        <div>
          <Link href="/about-us" title="About Us">
            About Us
          </Link>
        </div>
      </main>
    </>
  )
}

export default Home
