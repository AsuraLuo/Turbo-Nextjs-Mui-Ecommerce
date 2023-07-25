import Head from 'next/head'
import Link from 'next/link'
// import { configureScope, captureException, startTransaction, withScope } from '@sentry/nextjs'
// import Script from 'next/script'
// import { useEffect } from 'react'
// import { styled } from '@mui/material/styles'
import { styled } from '@mui/system'

import { Button } from '@ocommerce/ui'

const StyledComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4
})

const Home = () => {
  // useEffect(() => {
  //   const transaction = startTransaction({
  //     name: 'Testing performance'
  //   })

  //   configureScope((scope) => {
  //     scope.setSpan(transaction)
  //   })

  //   try {
  //     // Some operation the button does, but fails
  //     throw new Error('Client Test 5')
  //   } catch (error) {
  //     captureException(error)
  //   } finally {
  //     transaction.finish()
  //   }
  // }, [])
  // withScope((scope) => {
  //   scope.setLevel('warning')
  //   captureException(err)
  // })

  // const GoogleMapsCDN =
  //   'https://maps.googleapis.com/maps/api/js?key=AIzaSyDCKkZWf8J-Q023NhoipffJt4uDAWKNzFs&libraries=places&callback=initMap'
  // // &callback=Function.prototype

  // useEffect(() => {
  //   const initMap = async () => {
  //     console.info('google map callback function excute...')
  //     const { Map } = await window.google.maps.importLibrary('maps')
  //     const map = new Map(document.getElementById('map'), {
  //       center: { lat: -34.397, lng: 150.644 },
  //       zoom: 8
  //     })
  //     console.info(map)
  //   }
  //   window.initMap = window.initMap || initMap
  // }, [])

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      {/* <Script
        src={GoogleMapsCDN}
        onLoad={() => {
          console.info('GoogleMapsCDN-loaded')
        }}
        strategy="lazyOnload"
      /> */}
      <StyledComponent>123</StyledComponent>
      <div>
        <Link href="/login" title="Login Page">
          Login Page
        </Link>
      </div>
      <div style={{ marginBottom: 30 }}>
        <Link href="/about-us" title="About Us">
          <Button variant="contained" type="button">
            About Us
          </Button>
        </Link>
      </div>
      {/* <TextField label="Hot Key" placeholder="Enter key worlds..." defaultValue="key" /> */}
    </>
  )
}

export default Home
