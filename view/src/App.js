import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import React from 'react';
import './assets/css/main.scss'
import theme from './Theme';
import { useState } from 'react';
import { Typography, Button, Box, ThemeProvider, Drawer } from '@mui/material'
import { styled } from '@mui/material/styles';
import { BoldDivider } from './components/CustomComponents';
import { useEffect } from 'react';

function App() {

	const [toggleMenu, setToggleMenu] = useState(false)
	const pages = ['Home', 'About Me', 'Projects']

	const goTo = (page) => (event) => {
		// window.location.href=`#page${page}`
		console.log(page)
		let pageAnchor = document.getElementById(page)
		pageAnchor.scrollIntoView({ behavior: 'smooth' })
		setToggleMenu(false)
	}
	function openMenu() {
		setToggleMenu(true)
	}

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
		<ThemeProvider theme={theme}>

			<div className="App">
				{/* <BackGround /> */}
				
					<NavBar
						navOptions={navOptions}
						openMenu={openMenu}
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
					<Drawer
						anchor={'right'}
						open={toggleMenu}
					>
						{navOptions}
					</Drawer>
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
	const [innerWidth, setInnerWidth] = useState(window.innerWidth || 0)
	useEffect(() => {
		window.addEventListener("resize", () => {
			setInnerWidth(window.innerWidth)
		})
	},[props])


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
			{innerWidth > 740 ?
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
					{[1,2,3].map((index) => {
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
