import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Box, Chip, Container, Paper, Tab, Tabs, Typography } from '@mui/material';
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
                setLanguages(makeFit(data.languages.sort((a, b) => b.length - a.length)))
                setTools(makeFit(data.tools.sort((a, b) => b.length - a.length)))
            } catch (error) {
                console.log(error)
            }
        }
        initialize()
    }, [])

    function makeFit(array) {
        let sortedArray = []
        let length = 0
        while (array.length > 0){
            let itemLength = array[0].length

            if(itemLength + length < 26){
                length += itemLength
                sortedArray.push(array.shift())
            } else {
                length = itemLength
                sortedArray.push(array.pop())
            }
        }
        return sortedArray
    }

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
                    <Paper
                        elevation={4}
                        sx={{
                            margin: '16px 0'
                        }}
                    >
                        <Box
                            //marginBottom={'24px'}
                        >
                            <Typography
                                variant="h5"
                                textAlign={'center'}
                                padding={1}
                            >
                                {"Languages I Know"}
                            </Typography>
                            <BoldDivider />

                            <Box
                                display={'flex'}
                                flexWrap={'wrap'}
                                justifyContent={'center'}
                                width={1}
                                padding={2}
                                columnGap={2}
                                rowGap={1}
                            >
                                {
                                    languages.map((element, index) => {
                                        return (
                                            <Typography
                                                key={element}
                                                variant={'h6'}
                                                width={'fit-content'}
                                            >
                                                {element}
                                            </Typography>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Paper>
                    <Paper
                        elevation={4}
                        sx={{
                            margin: '16px 0'
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                textAlign={'center'}
                                padding={1}
                            >
                                {"Tools I Use"}
                            </Typography>
                            <BoldDivider/>

                            <Box
                                display={'flex'}
                                flexWrap={'wrap'}
                                justifyContent={'center'}
                                width={1}
                                padding={2}
                                rowGap={1}
                                columnGap={1}
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
                    </Paper>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    width={.65}
                >
                    <Typography
                        variant={'body1'}
                        textAlign={'left'}
                        sx={{
                            textIndent: '24px'
                        }}
                    >
                        My developer story starts at the University Of Central Florida
                        where I took my first programming class. I quickly noticed I could
                        pursue my love of problem solving, while also learning skills
                        I could continuously improve on and use to help others.<br /><br />
                    </Typography>
                    <Typography
                        variant={'body1'}
                        textAlign={'left'}
                        sx={{
                            textIndent: '24px'
                        }}
                    >
                        I pride myself in my ability to accomplish the goals I set for myself 
                        and my attention to detail in my professional work. Every second spent 
                        creating is an opportunity for me to learn something new, and if I'm
                        lucky, I'll be able to apply the new knowledge to other parts of my life.
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