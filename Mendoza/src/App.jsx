import { Route, Routes } from 'react-router-dom'
import LayoutPrincipal from './components/LayoutPrincipal'
import Destinos from './pages/Destinos'
import DetalleDestinos from './pages/DetalleDestinos'
import Inicio from './pages/Inicio'
import NoEncontrada from './pages/NoEncontrada'
import Nosotros from './pages/Nosotros'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<LayoutPrincipal />}>
        <Route index element={<Inicio />} />
        <Route path="destinos" element={<Destinos />} />
        <Route path="destinos/:id" element={<DetalleDestinos />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}

export default App
