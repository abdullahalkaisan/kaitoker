// theme.js

import { createTheme } from '@mui/material/styles';



export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    activeOnline: {
      main: '#46AB5E',
    },
  },
});



export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

