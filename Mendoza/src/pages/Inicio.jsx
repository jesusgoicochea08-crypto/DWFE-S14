import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <section className="page container home-page">
      <div className="home-copy">
        <p className="eyebrow">Viaja, explora, descubre</p>
        <h1>Tu próxima aventura empieza en Perú</h1>
        <p>Encuentra información de destinos turísticos del Perú.</p>
        <Link to="/destinos">Ver destinos</Link>
      </div>
      <img
        className="home-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNqcSpd0Z7IufaYY3ME-Gb_YXdYWgFA6_aTs_JoPHgcyT1KI8G5TqSrD8f&s=10"
        alt="Imagen de portada de Perú Explora"
      />
    </section>
  )
}

export default Inicio