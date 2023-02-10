import Head from 'next/head'
import dynamic from 'next/dynamic'

const BasePageBuilder = dynamic(() => import('@ecommerce/ui/BasePageBuilder'), {
  ssr: true
})

const Login = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <BasePageBuilder />
    </>
  )
}

export default Login
