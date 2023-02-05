import Head from 'next/head'
import dynamic from 'next/dynamic'

const LoginPage = dynamic(() => import('@components/LoginPage'), {
  ssr: false
})

const Login = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <LoginPage />
    </>
  )
}

export default Login
