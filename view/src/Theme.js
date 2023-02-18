import { createTheme  } from '@mui/material/styles';

let theme = createTheme({
    typography:{
        fontFamily: ['Montserrat-Medium', 'sans-serif'].join(','),
        body1:{
            fontSize: '20px',
            fontWeight: '500'
        },
        h4:{
            //fontSize: '20px'
            '@media (max-width:740px)':{
                //fontSize: '1rem'
            }
        },
        

        
    
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


  export default theme;