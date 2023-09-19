import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.scss'

import App from './App.jsx'
import ErrorPage from "./components/ErrorPage"
import Articles from "./components/Articles"
import Home from './components/Home'
import Movies from './components/Movies'
import Reviews from "./components/Reviews"

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
        path: "/reviews",
        element: <Reviews/>
      },
      {
        path: "/articles",
        element: <Articles />
      },
      {
        path: "/movies",
        element: <Movies />,
        children: [
          {
            path: "/movies/:id"
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
