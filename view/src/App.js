import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import React from 'react';
import BackGround from './components/BackGround'
import './assets/css/main.scss'
import theme from './Theme';
import { useState } from 'react';
import { Typography, Button, Box, Container, ThemeProvider } from '@mui/material'
import { styled } from '@mui/material/styles';

function App() {

	const [toggleMenu, setToggleMenu] = useState(false)

	function animate() {
		return toggleMenu ? 'slide-left' : 'slide-right';
	}



	return (
		<ThemeProvider theme={theme}>

			<div className="App">
				{/* <BackGround /> */}
				<Box>
					<NavBar setToggleMenu={setToggleMenu} />

					<Box>
						<Home />
						<About />
						{/*<Projects /> */}
					</Box>
				</Box>
			</div>
		</ThemeProvider>

	);
}

function NavBar(props) {

	const pages = ['Home', 'About Me', 'Projects']

	const goTo = (page) => (event) => {
		// window.location.href=`#page${page}`
		let pageAnchor = document.getElementById(page)
		pageAnchor.scrollIntoView()
		props.setToggleMenu(false)
	}

	const NavButton = styled(Button)({
		padding: "6px 16px",
		margin: '0 8px',
		marginTop: '4px',
		flexDirection: 'column',
		borderRadius: 0,
		backgroundColor: "transparent",
		color: "black",
		"&:hover": {
			backgroundColor: "transparent",
			'&::after': {
				transform: 'scaleX(1)',
			},
		},
		'&::after': {
			content: '" "',
			backgroundColor: 'black',
			width: '100%',
			height: '4px',
			transform: 'scaleX(0%)',
			transition: 'all .5s ease'
		},
	});

	return (
		<Box
			className="navbar"
			display='flex'
			flexDirection='row'
			alignItems={'center'}
			sx={{
				backgroundColor: (theme) => theme.palette.secondary.main,
				top: 0,
				position: 'sticky',
				borderBottom: 'solid 1px black'
			}}
		>
			<Typography
				variant='h4'
				component={'h1'}
				margin={'12px'}
				marginRight={'auto'}
				marginLeft={'24px'}
				fontWeight={'500'}
			>
				{'Mikal Young'}
			</Typography>
			{
				pages.map((page) => {
					return (
						<NavButton
							variant={'text'}
						>
							<Typography
								variant='h5'
							>
								{page}
							</Typography>
						</NavButton>
					)
				})
			}
		</Box>
	)
}

export default App;
