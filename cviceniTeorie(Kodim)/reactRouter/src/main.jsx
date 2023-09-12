import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import './index.scss'

import App from './App.jsx'
import ExpensesPage from './pages/ExpensesPage';
import InvoicesPage from './pages/InvoicesPage/index.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/expenses',
        element: <ExpensesPage />,
      },
      {
        path: '/invoices',
        element: <InvoicesPage />,
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

/* createRoot(document.querySelector('#root')).render(
  <RouterProvider router={router} />
); */
