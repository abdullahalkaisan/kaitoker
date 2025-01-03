import { ThemeProvider } from '@emotion/react'
import { createContext, useState } from 'react';
import {
    UilMoon,
    UilSun,
  } from '@iconscout/react-unicons'
import { darkTheme, lightTheme } from '../theme';
import PropTypes from 'prop-types';
  
  export const ThemeCustomContext = createContext(null);
export default function ThemeCustomProvider({children}) {

    
    const [isDarkMode, setIsDarkMode] = useState(
        //   localStorage.getItem('theme') === 'light' || prefersDarkMode
          localStorage.getItem('theme') === 'light'
        );
      
        const toggleTheme = () => {
          setIsDarkMode((prevTheme) => !prevTheme);
          // localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        };

        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      // const [isDarkMode, setIsDarkMode] = useState(false);
      const icon = isDarkMode ? <UilSun /> : <UilMoon /> ;
    
      const darkModeToggleFunc = ()=>{
          setIsDarkMode(!isDarkMode)
      }
    
    const themeInfo = {
        icon,
        darkModeToggleFunc,
        toggleTheme
    }
    



  return ( 
    <ThemeCustomContext.Provider value={themeInfo}>
        <ThemeProvider theme={ isDarkMode ? darkTheme : lightTheme} >
            {children}
        </ThemeProvider>
    </ThemeCustomContext.Provider>
  )
}



ThemeCustomProvider.propTypes = {
  children: PropTypes.node,
};
