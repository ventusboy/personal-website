import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import React from 'react';
import './assets/css/main.scss'
import theme from './Theme';
import { useState } from 'react';
import { Typography, Button, Box, ThemeProvider, Drawer, Stack } from '@mui/material'
import { styled, responsiveFontSizes } from '@mui/material/styles';
import { BoldDivider } from './components/CustomComponents';
import { useEffect } from 'react';

function App(props) {

	const [toggleMenu, setToggleMenu] = useState(false)
	const [scrollTo, setScrollTo] = useState('')
	const [isMobile, setIsMobile] = useState(window.innerWidth < 740)

	const pages = ['Home', 'About Me', 'Projects']

	const goTo = (page) => (event) => {
		setScrollTo(page)
		setToggleMenu(false)
	}
	function openMenu() {
		setToggleMenu(true)
	}
	function closeMenu() {
		setToggleMenu(false)
	}
	useEffect(() => {
		window.addEventListener("resize", () => {
			setIsMobile(window.innerWidth < 740)
		})
	}, [props])

	useEffect(()=>{
		if(toggleMenu === true)
			return

		if(scrollTo === '')
			return

		let extraPadding = 0
		//if(/Android/i.test(navigator.userAgent) ) {
			extraPadding = 68
		//}
		console.log(document.getElementById(scrollTo).offsetTop)

		document.getElementById('container').scrollTo({
			left: 0,
			top: document.getElementById(scrollTo).offsetTop + (-1 * extraPadding * 1.5),
			behavior: "smooth",
		});


	}, [toggleMenu, scrollTo, isMobile])

	const navOptions = pages.map((page) => {
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


	return (
		<ThemeProvider theme={responsiveFontSizes(theme)}>

			<Box 
				className="App"				
			>

				<NavBar
					navOptions={navOptions}
					openMenu={openMenu}
					isMobile={isMobile}
				/>
				<Box
					id={'container'}
					overflow={'auto'}
					height={'calc(100vh - 68px)'}

					sx={{
						scrollbarWidth: 'none',
						'&::-webkit-scrollbar': {
							display: 'none'
						}
					}}
				>

					<Drawer
						anchor={'right'}
						open={toggleMenu}
						onClose={closeMenu}
					>
						<Stack
							paddingTop={3}
						>
							{navOptions}
						</Stack>

					</Drawer>
					<Box>
						<Home
							isMobile={isMobile}
						/>
						<About
							isMobile={isMobile}
						/>
						<Projects
							isMobile={isMobile}
						/>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>

	);
}

function NavBar(props) {

	function openPage (){
		window.open(window.origin, '_self')//.focus();
	}

	return (
		<Box
			className="navbar"
			display='flex'
			flexDirection='row'
			alignItems={'center'}
			width={1}
			sx={{
				backgroundColor: (theme) => theme.palette.secondary.main,
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
				sx={{
					cursor: 'pointer'
				}}
				onClick={openPage}
			>
				{'Mikal Young'}
			</Typography>
			{!props.isMobile ?
				props.navOptions
				:
				<Box
					height={1}
					padding={'16px'}
					display={'flex'}
					justifyContent={'space-around'}
					flexDirection={'column'}
					sx={{
						aspectRatio: '1/1'
					}}
					onClick={props.openMenu}
				>
					{[1, 2, 3].map((index) => {
						return (
							<BoldDivider
								key={index}
								sx={{
									borderWidth: '2px'
								}}
							/>
						)
					})}
				</Box>
			}
		</Box>
	)
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

export default App;
