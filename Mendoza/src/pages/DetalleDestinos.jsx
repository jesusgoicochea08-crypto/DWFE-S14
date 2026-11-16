import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { obtenerDestino } from '../services/destinoService'

function DetalleDestinos() {
  const { id } = useParams()
  const [resultado, setResultado] = useState(null)

  useEffect(() => {
    let activo = true
    obtenerDestino(id)
      .then((destino) => {
        if (activo) setResultado({ id, destino, error: '' })
      })
      .catch(() => {
        if (activo) {
          setResultado({
            id,
            destino: null,
            error: 'No se pudo cargar la información del destino.',
          })
        }
      })

    return () => {
      activo = false
    }
  }, [id])

  const cargando = resultado?.id !== id
  const destino = cargando ? null : resultado.destino
  const error = cargando ? '' : resultado.error

  if (cargando) {
    return <section className="page container"><p role="status">Cargando destino…</p></section>
  }

  if (error || !destino) {
    return (
      <section className="page container">
        <h1>{error ? 'Ocurrió un problema' : 'Destino no encontrado'}</h1>
        <p>{error || 'No existe un destino con ese identificador.'}</p>
        <Link to="/destinos">Volver a destinos</Link>
      </section>
    )
  }

  return (
    <article className="page container detail">
      <Link to="/destinos">← Todos los destinos</Link>
      <img className="detail-image" src={destino.imagen} alt={destino.nombre} />
      <h1>{destino.nombre}</h1>
      <p>{destino.ciudad} · {destino.categoria}</p>
      <p className="detail-description">{destino.descripcion}</p>
    </article>
  )
}

export default DetalleDestinos