import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import { BoldDivider } from "../components/CustomComponents";
import { styled } from '@mui/material/styles';

function About(props) {
    /* constructor (props) {
        super(props)
        this.state = {
            languages: [],
            tools: []
        }
    } */
    const [languages, setLanguages] = useState([])
    const [tools, setTools] = useState([])
    const [value, setValue] = useState(0)


    useEffect(() => {
        const baseURL = 'https://us-central1-portfolio-610be.cloudfunctions.net'

        async function initialize() {
            try {
                let { data } = await axios.get('/getAbout')
                setLanguages(data.languages.sort((a, b) => b.length - a.length))
                setTools(data.tools.sort((a, b) => b.length - a.length))
            } catch (error) {
                console.log(error)
            }
        }
        initialize()
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Container>
            <Typography
                variant="h3"
                margin={'64px 0'}
            >
                {'About Me'}
            </Typography>
            <Box
                //id="About"
                display={'flex'}
                width={1}
                justifyContent={'space-between'}
            >

                <Box
                    display={'flex'}
                    //justifyContent={'space-around'}
                    flexDirection={'column'}
                    width={.3}
                >
                    <Box
                        marginBottom={'24px'}
                    >
                        <Typography
                            variant="h5"
                            textAlign={'center'}
                        >
                            {"Languages I Know"}
                        </Typography>
                        <BoldDivider
                            sx={{
                                margin: '12px 0'
                            }}
                        />

                        <Box
                            display={'flex'}
                            flexWrap={'wrap'}
                            width={1}
                        >
                            {
                                languages.map((element, index) => {
                                    return (
                                        <Typography
                                            key={element}
                                            variant={'h6'}
                                            width={'fit-content'}
                                            marginRight={'16px'}
                                        >
                                            {element}
                                        </Typography>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            variant="h5"
                            textAlign={'center'}
                        >
                            {"Tools I Use"}
                        </Typography>
                        <BoldDivider
                            sx={{
                                margin: '12px 0'
                            }}
                        />

                        <Box
                            display={'flex'}
                            flexWrap={'wrap'}
                            justifyContent={'flex-end'}
                            width={1}
                        >
                            {
                                tools.map((element, index) => {
                                    return (
                                        <Typography
                                            key={element}
                                            variant={'h6'}
                                            width={'fit-content'}
                                            marginRight={'16px'}
                                        >
                                            {element}
                                        </Typography>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    width={.65}
                >
                    <Typography
                        variant={'body1'}
                    >
                        My developer story starts at the University Of Central Florida
                        where I took my first programming class. I quickly noticed I could
                        pursue my love of problem solving, while also learning skills 
                        I could continuously improve on and use to help others.<br /><br />
                    </Typography>
                    <Typography
                        variant={'body1'}
                    >
                        I pride myself in my ability to go above and beyond
                        for tasks given to me and my attention to detail. Every second spent developing is an
                        opportunity
                        for me to learn something new that I can carry into the future, into other languages, and into
                        my life.
                    </Typography>
                </Box>
            </Box>
        </Container>
    )

}

const CenteredBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

export default About