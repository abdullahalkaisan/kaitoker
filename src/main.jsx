import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainWithTheme from './MainWithTheme.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <MainWithTheme /> */}
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>


  </React.StrictMode>,

)


