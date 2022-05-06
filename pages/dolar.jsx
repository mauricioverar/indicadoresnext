import Navbar from '../components/Navbar'

export default function dolar({data}) {
  return (
    <Navbar
      title="Dolar | Indicadores"
      description="agregue descripción"
    >
      <h1>Dolar</h1>

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
