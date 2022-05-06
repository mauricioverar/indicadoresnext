import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/Celular.css'
import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

let I = 0

// function MyApp({ Component, pageProps, data }) {
//   console.log('app I= ', I) //
//   if (I == 0) {
//     I = 1
//     getStaticProps()
//   }
//   console.log(data)
  
//   return (
    
//   <Component {...pageProps} />
//   )
// }

async function getStaticProps() { // getStaticProps = obtención de datos en tiempo real
  try {
    const res = await fetch('https://mindicador.cl/api/bitcoin')
    const data = await res.json()
    console.log(data.serie);

    // return (
    //   <div className="container mt-5 text-center">
    //     <div className="spinner-border text-primary" role="status">
    //       <span className="sr-only">Loading...</span>
    //     </div>
    //   </div>
    // )
    
    return { // envía props data
      props: {
        data
      }
    }
  } catch (err) {
    console.log(err)
  }
}
