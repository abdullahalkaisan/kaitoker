import { ThemeProvider } from '@emotion/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
// import ProfilePage from './pages/ProfilePage/ProfilePage'
import { darkTheme, theme } from './theme'
import { useState } from 'react';
import {
  UilMoon,
  UilSun,
} from '@iconscout/react-unicons'
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CallPage from './pages/CallPage/CallPage';
import ReelPage from './pages/ReelPage/ReelPage';
// import { useMediaQuery } from '@mui/material'


export default function MainWithTheme() {


    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');


    const [isDarkMode, setIsDarkMode] = useState(
    //   localStorage.getItem('theme') === 'light' || prefersDarkMode
      localStorage.getItem('theme') === 'light'
    );
  
    const toggleTheme = () => {
      setIsDarkMode((prevTheme) => !prevTheme);
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    };






    
//   const [isDarkMode, setIsDarkMode] = useState(false);
  const icon = isDarkMode ? <UilSun /> : <UilMoon /> ;


//   const darkModeToggleFunc = ()=>{
//       setIsDarkMode(!isDarkMode)
//   }



  return (
        <ThemeProvider theme={ isDarkMode ? darkTheme : theme} >
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<App darkIcon={icon} darkModeToggle={toggleTheme} />} />
                <Route path="/profile" element={<ProfilePage/>} />
                <Route path="/callpage" element={<CallPage/>} />
                <Route path="/reel" element={<ReelPage/>} />
            </Routes>
            </BrowserRouter>
        </ThemeProvider>
  )
}
