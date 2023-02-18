import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import React from 'react';
import './assets/css/main.scss'
import theme from './Theme';
//import { useState } from 'react';
import { Typography, Button, Box, ThemeProvider } from '@mui/material'
import { styled } from '@mui/material/styles';

function App() {

	//const [toggleMenu, setToggleMenu] = useState(false)

	return (
		<ThemeProvider theme={theme}>

			<div className="App">
				{/* <BackGround /> */}
				<NavBar
					//setToggleMenu={setToggleMenu}
				/>
				<Box
					overflow={'auto'}
					height={'calc(100vh - 68px)'}
					sx={{
						scrollbarWidth: 'none',
						'&::-webkit-scrollbar': {
							display: 'none'
						}
					}}
				>
					<Box>
						<Home />
						<About />
						<Projects />
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
		pageAnchor.scrollIntoView({ behavior: 'smooth' })
		//props.setToggleMenu(false)
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
				//top: 0,
				//position: 'sticky',
				height: props.height || '68px',
				borderBottom: 'solid 1px black',
				zIndex: 99
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
							key={page}
							variant={'text'}
							onClick={goTo(page)}
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
