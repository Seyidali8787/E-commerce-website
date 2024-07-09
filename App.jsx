
import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './Component/NavItems'

function App() {
  

  return (
    <>
    <NavItems/>
    <Outlet/>
    </>
  )
}

export default App
