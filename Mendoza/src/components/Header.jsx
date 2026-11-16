import { Link } from 'react-router-dom'
import Menu from './Menu'

function Header() {
  return (
    <header className="site-header">
      <nav className="container navigation" aria-label="Navegación principal">
        <Link className="brand" to="/">
          <img
            className="brand-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNqcSpd0Z7IufaYY3ME-Gb_YXdYWgFA6_aTs_JoPHgcyT1KI8G5TqSrD8f&s=10"
            alt=""
          />
          <span>Perú Explora</span>
        </Link>
        <Menu />
      </nav>
    </header>
  )
}

export default Header