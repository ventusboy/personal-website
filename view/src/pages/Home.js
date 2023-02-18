import React from 'react';
import { Box, Divider, Typography, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BoldDivider } from './../components/CustomComponents';

function Home() {


    const NavButton = styled(Button)({
        padding: "0px 0px",
        borderRadius: 0,
        backgroundColor: "transparent",
        color: "black",
        textTransform: 'none',
        "&:hover": {
            backgroundColor: "transparent",
        }

    });

    function ExternalLink(props) {
        return (
            <NavButton
                sx={{
                    width: props.width
                }}
                onClick={props.onClick}
            >
                <BoldDivider
                    sx={{
                        width: '100%',
                        transition: '.5s ease',
                        margin: '4px 0',
                        "&:hover": {
                            transform: 'scale(1.3)',
                        }
                    }}
                >
                    {props.children}
                </BoldDivider>
            </NavButton>
        )
    }

    const links = [
        'https://www.linkedin.com/in/mikal-young-6772a516a',
        'https://github.com/ventusboy',
        'mailto:mikalmyoung@gmail.com',
        'https://www.upwork.com/o/profiles/users/_~01f898c51eb6ad6854/'
    ]

    function openLink(index){
        return function (){
            window.open(links[index], '_blank').focus();
        }
    }


    return (
        <Container
            id="Home"
        >
            <Typography
                variant='h4'
                paddingTop={7}
            >
                Bringing Ideas to life, <br className="hide-on-mobile" />
                <Box marginLeft={0}>one line of code at a time.</Box>
            </Typography>

            <BoldDivider
                sx={{
                    margin: '16px 0'
                }}
            />

            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
            >
                <Typography
                    variant='h6'
                    textAlign={'center'}
                    width={.7}//.8}

                >
                    Hi! My name is Mikal Young and I am a Software
                    Engineer based in Central Florida. I specialize in
                    FullStack Web Development using various tools and frameworks.
                    Learning is my passion, and problem solving is my hobby.
                </Typography>
                <Box
                    width={.4}
                    alignItems={'center'}
                    display={'flex'}
                    flexDirection={'column'}
                    margin={'16px 0'}
                >
                    <ExternalLink onClick={openLink(0)} width={'90%'}>Linkedin</ExternalLink>
                    <ExternalLink onClick={openLink(1)} width={'80%'}>Github</ExternalLink>
                    <ExternalLink onClick={openLink(2)} width={'70%'}>Email Me</ExternalLink>
                    <ExternalLink onClick={openLink(3)} width={'60%'}>Upwork</ExternalLink>
                </Box>

            </Box>
        </Container>
    )
}

export default Home