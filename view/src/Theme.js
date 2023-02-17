import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography:{
        fontFamily: ['Montserrat-Medium', 'sans-serif'].join(','),
        body1:{
            fontSize: '20px',
            fontWeight: '500'
        }
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