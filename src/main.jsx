import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainWithTheme from './MainWithTheme.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import { ThemeProvider, createTheme } from '@mui/material'



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <MainWithTheme /> */}


    
  <ThemeProvider theme={lightTheme}>
    <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </ThemeProvider>


  </React.StrictMode>,

)


