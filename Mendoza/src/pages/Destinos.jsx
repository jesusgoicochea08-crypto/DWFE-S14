import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listarDestinos } from '../services/destinoService'

function Destinos() {
  const [destinos, setDestinos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let activo = true
    listarDestinos()
      .then((datos) => {
        if (activo) setDestinos(datos)
      })
      .catch(() => {
        if (activo) setError('No se pudieron cargar los destinos. Intenta nuevamente.')
      })
      .finally(() => {
        if (activo) setCargando(false)
      })

    return () => {
      activo = false
    }
  }, [])

  return (
    <section className="page container">
      <p className="eyebrow">Encuentra tu próximo viaje</p>
      <div className="section-heading">
        <h1>Destinos</h1>
      </div>
      {cargando && <p className="message" role="status">Cargando destinos…</p>}
      {error && <p className="message error" role="alert">{error}</p>}
      {!cargando && !error && destinos.length === 0 && (
        <p className="message">No hay destinos disponibles.</p>
      )}
      {!cargando && !error && (
        <div className="destination-grid">
          {destinos.map((destino) => (
            <article className="destination-card" key={destino.id}>
              <img src={destino.imagen} alt={destino.nombre} />
              <div className="card-content">
                <h2>{destino.nombre}</h2>
                <p>{destino.ciudad}</p>
                <p>{destino.categoria}</p>
                <Link to={`/destinos/${destino.id}`}>Ver destino</Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Destinos