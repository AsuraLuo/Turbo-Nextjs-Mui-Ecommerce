import Head from 'next/head'
import Link from 'next/link'
import * as Sentry from '@sentry/nextjs'
// import Script from 'next/script'
import { useEffect } from 'react'

import { Button, TextField } from '@ocommerce/ui'

const Home = () => {
  useEffect(() => {
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
  }, [])
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
      <div>
        <Link href="/login" title="Login Page">
          Login Page
        </Link>
      </div>
      <div id="map" style={{ width: 800, height: 800 }} />
      <div style={{ marginBottom: 30 }}>
        <Link href="/about-us" title="About Us">
          <Button variant="contained" type="button">
            About Us
          </Button>
        </Link>
      </div>
      <TextField label="Hot Key" placeholder="Enter key worlds..." defaultValue="key" />
    </>
  )
}

export async function getServerSideProps() {
  // try {
  //   throw new Error('SSR Test 4')
  // } catch (error) {
  //   Sentry.captureException(error)
  //   // Flushing before returning is necessary if deploying to Vercel, see
  //   // https://vercel.com/docs/platform/limits#streaming-responses
  //   await Sentry.flush(2000)
  // }
  return { props: {} }
}

export default Home
