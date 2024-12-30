import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Box } from '@mui/material'
import styled from 'styled-components';

import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import ThemeCustomProvider from './Providers/ThemeCustomProvider.jsx'
import CallCardProvider from './Providers/CallCardProvider.jsx';

// import ProfilePage from './pages/ProfilePage/ProfilePage';


//     function styled_default() {
//       // Function logic...
//     }

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <CallCardProvider>
        <ThemeCustomProvider>
          <AuthProvider>
              <RouterProvider router={router}></RouterProvider>
          </AuthProvider>
        </ThemeCustomProvider>
    </CallCardProvider>
  // </React.StrictMode>,

)


