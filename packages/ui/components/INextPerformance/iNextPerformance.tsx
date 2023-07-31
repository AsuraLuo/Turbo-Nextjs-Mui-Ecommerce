import { useEffect, useState } from 'react'

const INextPerformance = () => {
  const [byte, setByte] = useState<string>('128kB')

  useEffect(() => {
    const nextElement: HTMLElement | null = document.getElementById('__NEXT_DATA__')

    if (nextElement) {
      const text: string = nextElement.innerText || ''
      const size: number = unescape(encodeURIComponent(text)).length / 1000

      if (size > 128) {
        console.info(
          '%cReduce the amount of data returned from getStaticProps, getServerSideProps, or getInitialProps to only the essential data to render the page. The default threshold of %c128kB can be configured in largePageDataBytes if absolutely necessary and the performance implications are understood.',
          'color: orange',
          'color: red;font-weight:bold'
        )
      } else {
        console.info(
          `%cThe ssr props size: %c${size.toFixed(1)}kB`,
          'color: green',
          'color: green;font-weight:bold'
        )
      }
      setByte(`${size.toFixed(1)}kB`)
    }
  }, [])

  return (
    <div id="performace" style={{ display: 'none ' }}>
      {byte}
    </div>
  )
}

export default INextPerformance
