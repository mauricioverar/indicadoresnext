import Navbar from '../components/Navbar'

export default function bitcoin({ data }) {
  return (
    <Navbar
      title="Bitcoin | Indicadores"
      description="agregue descripción"
    >
      <h1>Bitcoin</h1>
      <p>unidad_medida: Dólar</p>
      {
        data.serie.map(({ fecha, valor }) => (
          <div key={fecha}>
            <h3>
              <a>{fecha} - {valor}</a>
              </h3>
          </div>
        ))
      }
    </Navbar>
  )
}

export async function getStaticProps() { // getStaticProps = obtención de datos en tiempo real
  try {
    const res = await fetch('https://mindicador.cl/api/bitcoin')
    const data = await res.json()
    // console.log(data);

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