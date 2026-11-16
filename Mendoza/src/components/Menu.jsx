import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div className="navigation-links">
      <NavLink className={({ isActive }) => `navigation-link${isActive ? ' is-active' : ''}`} to="/" end>
        Inicio
      </NavLink>
      <NavLink className={({ isActive }) => `navigation-link${isActive ? ' is-active' : ''}`} to="/destinos">
        Destinos
      </NavLink>
      <NavLink className={({ isActive }) => `navigation-link${isActive ? ' is-active' : ''}`} to="/nosotros">
        Nosotros
      </NavLink>
    </div>
  )
}

export default Menu