import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function LayoutPrincipal() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default LayoutPrincipal