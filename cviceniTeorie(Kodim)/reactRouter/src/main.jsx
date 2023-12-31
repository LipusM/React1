import React from 'react'
import ReactDOM from 'react-dom/client'
/* import { createRoot } from 'react-dom/client'; */
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import './index.scss'

import App from './App.jsx'
import HomePage from './pages/HomePage';
import ExpensesPage from './pages/ExpensesPage';
import InvoicesPage from './pages/InvoicesPage/index.jsx';
import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: '/expenses',
        element: <ExpensesPage />,
      },
      {
        path: '/invoices',
        element: <InvoicesPage />,
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

