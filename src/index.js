import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Landing from './screens/Landing'
import Home from './screens/Home'
import Bio from './screens/Bio'
import Media from './screens/Media'
import Press from './screens/Press'
import Contact from './screens/Contact'
import { HelmetProvider } from 'react-helmet-async'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Landing />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/bio" element={<Bio />}></Route>
      <Route path="/media" element={<Media />}></Route>
      <Route path="/press" element={<Press />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
)
