import Header from './components/Header'
import Footer from './components/Footer'
import { useLocation } from 'react-router'
import { Outlet } from 'react-router'

function App() {
  const location = useLocation()
  const landingPageActive = location.pathname === '/'
  return (
    <>
      {!landingPageActive && <Header />}

      <Outlet />
      <Footer />
    </>
  )
}

export default App
