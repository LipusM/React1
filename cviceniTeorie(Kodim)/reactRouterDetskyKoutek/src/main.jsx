import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.scss'

import App from './App.jsx'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Pobocky from './pages/Pobocky'
import CenterDetail from './pages/CenterDetail'
import ErrorPage from './pages/ErrorPage'

import centers from './data/centers'


const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/pobocky",
        element: <Pobocky />,
      },
      {
        path: "/pobocky/:id",
        element: <CenterDetail />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
