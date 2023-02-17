import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';


export const BoldDivider = styled(Divider)({
    //margin: '16px 0',
    //height: 'auto',
    borderWidth: '1px',
    borderColor: 'black',
    '&::before, &::after': {
        borderTopWidth: '2px',
        borderTopColor: 'black'
    },
})



