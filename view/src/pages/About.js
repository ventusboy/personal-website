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
        <CenteredBox
        //id="About"
        >
            <Typography
                variant="h4"
                margin={'64px 0'}
            >
                {'About Me'}
            </Typography>
            <CenteredBox
                //width={.7}

            >


                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="skills"
                    variant="fullWidth"
                    textColor={'primary'}
                    indicatorColor={'primary'}
                    centered
                >
                    <Tab label="Languages I Know">
                        {"Languages I Know"}
                    </Tab>
                    <Tab label="Tools I Use">
                        {"Tools I Use"}
                    </Tab>

                </Tabs>
                <CenteredBox
                    //padding={'12px'}
                    minHeight={'320px'}
                    width={1}
                    sx={{
                        alignItems: value === 0 ? 'start' : 'end'
                    }}
                >
                    {
                        (value === 0 ? tools : languages).map((element, index) => {
                            return (
                                <Typography
                                    key={element}
                                    variant={'h6'}
                                >
                                    {element}
                                </Typography>
                            )
                        })
                    }
                </CenteredBox>
            </CenteredBox>

            {/* <Box
                display={'flex'}
                justifyContent={'space-between'}
            >
                <Box
                    width={.4}
                >


                    <Typography
                        variant="h5"
                        textAlign={'center'}
                    >
                        {'Languages Spoken'}
                    </Typography>


                    {languages.map((language) => {
                        return (
                            <Typography
                                key={language}
                                variant={'h6'}
                            >
                                {language}
                            </Typography>
                        )
                    })}

                </Box>

                <Box
                    width={.4}
                >
                    <Typography
                        variant="h5"
                    //textAlign={'center'}
                    >
                        {'Tools I Use'}

                    </Typography>

                    {tools.map((tool) => {
                        return (
                            <Typography
                                key={tool}
                                variant={'h6'}
                            >
                                {tool}
                            </Typography>
                        )
                    })}
                </Box>

            </Box> */}
            <div className="contain">
                <p className="">
                    My developer story starts at the at the University Of Central Florida
                    where I took my first programming class. For the first time ever I was
                    enjoying solving academic problems and learning skills that I could use
                    in my daily life, and the rest was history.<br /><br />
                </p>
                <p>
                    I pride myself in my ability to go above and beyond
                    for tasks given to me and my attention to detail. Every second spent developing is an
                    opportunity
                    for me to learn something new that I can carry into the future, into other languages, and into
                    my life.
                </p>
            </div>
            <div className="tri"></div>
            <div id="anchor3" className="anchor"></div>
        </CenteredBox>
    )

}

const CenteredBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

export default About