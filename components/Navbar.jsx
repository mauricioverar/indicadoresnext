import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
// import styles from '../styles/Navbar.module.css'
// import utilStyles from '../styles/utils.module.css'

// const name = 'zen'

export default function Navbar({ children, title, description, home }) {
  // props
  // console.log(home)
  return (
    <>
      {/* importar styles */}

      {/* importar Head */}
      <Head>
        {/* nombre pagina pestaña se tendría q hacer a cada pag, pero mejor usar Navbar*/}
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
      </Head>

      <header>
        {home ? (
          <>
            {/* importar Image */}
            {/* <Image
              priority
              src="/img/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            /> */}
            {/* crear var name */}
            {/* <h1>{name}</h1> */}
          </>
        ) : (
          <>
            {/* importar Link y utilStyles*/}
            {/* <Link href="/">
              <a>
                <Image
                  priority
                  src="/img/1.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link> */}
            {/* <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2> */}
          </>
        )}
      </header>

      <nav>
        <div className="navbar d-flex justify-content-between text-black py-3">
          <div className="container">
            <Link href="/">
              <a className="d-flex">
                {/* <h4 className="mb-0">&#127829;🍕 &#128722;</h4> */}
                <i></i>
                <h4 className="mb-0">
                  {/* <i className="bi-alarm" styles="font-size: 2rem; color: cornflowerblue;"></i> */}
                  <i className="bi bi-house-door-fill"></i>
                  {/* <i className="bi bi-house-door"></i> */}
                </h4>
                <h4 className="mx-1 mb-0">Home</h4>
              </a>
            </Link>

            <Link href="/bitcoin">
              <a className="d-flex">
                <h4 className="mb-0">
                  <i className="bi bi-currency-bitcoin"></i> Bitcoin
                </h4>
              </a>
            </Link>
            <Link href="/dolar">
              <a className="d-flex">
                <h4 className="mb-0">
                  <i className="bi bi-currency-dollar"></i> Dolar
                </h4>
              </a>
            </Link>
            <Link href="/euro">
              <a className="d-flex">
                <h4 className="mb-0">
                  <i className="bi bi-currency-euro"></i> Euro
                </h4>
              </a>
            </Link>
          </div>
        </div>
      </nav>

      <hr />

      <main>{children}</main>
      {/* props */}

      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      {/* volver a home */}
    </>
  )
}

Navbar.defaultProps = {
  title: 'Next.js | Indicadores',
  description: 'descripción de mi sitio web'
}
