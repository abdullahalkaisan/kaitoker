import { ThemeProvider } from '@emotion/react'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import App from './App'
// import ProfilePage from './pages/ProfilePage/ProfilePage'
import { darkTheme, lightTheme } from './theme'
import { useState } from 'react';
import {
  UilMoon,
  UilSun,
} from '@iconscout/react-unicons'
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CallPage from './pages/CallPage/CallPage';
import ReelPage from './pages/ReelPage/ReelPage';
import CreateAccount_page from './pages/CreateAccount_page';
import LoginPage from './pages/LoginPage/LoginPage';
import AuthProvider from './Providers/AuthProvider';
import { router } from './Routes/Routes';
import styled from 'styled-components';

// import { useMediaQuery } from '@mui/material'
export default function MainWithTheme() {


    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    // function styled_default() {
    //   // Function logic...
    // }


    const [isDarkMode, setIsDarkMode] = useState(
    //   localStorage.getItem('theme') === 'light' || prefersDarkMode
      localStorage.getItem('theme') === 'light'
    );
  
    const toggleTheme = () => {
      setIsDarkMode((prevTheme) => !prevTheme);
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    };

  // const [isDarkMode, setIsDarkMode] = useState(false);
  const icon = isDarkMode ? <UilSun /> : <UilMoon /> ;

  const darkModeToggleFunc = ()=>{
      setIsDarkMode(!isDarkMode)
  }



  return (
        <ThemeProvider theme={ isDarkMode ? darkTheme : theme} >
          <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
          </AuthProvider>
        </ThemeProvider>
  )
}
