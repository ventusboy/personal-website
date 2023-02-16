import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography:{
        fontFamily: ['Montserrat-Medium', 'sans-serif'].join(',')
    },
    palette: {
        primary:{
            main: '#000000'
        },
        secondary: {
            main: '#FFF'
        }
    }

  });


  export default theme