import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from '@mui/material/styles';

function Projects(props) {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        axios.get('/getProjects')
            .then(({ data }) => {
                let projectsArray = Object.keys(data).map((element) => data[element])
                setProjects(projectsArray.sort((a,b) => a.description.length - b.description.length))
            }).catch(() => {
                console.log('error getting projects')
            })
    }, [setProjects])

    function openLink(link){
        return function (){
            window.open(link, '_blank').focus();
        }
    }

    return (
        <Container
            id='Projects'
        >
            <Typography
                variant="h3"
                margin={'64px 0'}
            >
                {'Projects'}
            </Typography>
            <Grid
                width={1}
                container
                spacing={{ md: 2 }}
                paddingBottom={6}
            >
                {projects.map(({ description, name, link }) => {
                    return (
                        <Grid
                            key={name}
                            sm={6}
                            padding={2}
                        >
                            <Paper
                                elevation={4}
                                sx={{
                                    height: 1
                                }}
                            >
                                <Box
                                    padding={2}
                                >

                                    {link ?
                                        (<NavButton
                                            disableTouchRipple
                                            onClick={openLink(link)}
                                            sx={{
                                                padding: '16px',
                                            }}
                                        >
                                            <Typography
                                                variant="h4"
                                                borderBottom={'3px solid black'}
                                            >
                                                {name}
                                            </Typography>
                                        </NavButton>) :
                                        (<Typography
                                            variant="h4"
                                            padding={'16px'}
                                        >
                                            {name}
                                        </Typography>)
                                    }

                                    <Typography
                                        variant="body1"
                                        textAlign={props.isMobile ? 'center' : 'center'}
                                        padding={'16px'}
                                        sx={{
                                            textIndent: '24px'
                                        }}
                                    >
                                        {description}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

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

export default Projects