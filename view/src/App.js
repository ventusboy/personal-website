import './assets/css/main.scss'
import './App.css';
import ReactGA from 'react-ga4';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import theme from './Theme';
import { useState } from 'react';
import { Typography, Button, Box, ThemeProvider, Drawer, Stack, CssBaseline, Paper, Link } from '@mui/material'
import { styled } from '@mui/material/styles';
import { BoldDivider } from './components/CustomComponents';
import { useEffect } from 'react';
import useAnalyticsEventTracker from './components/useAnalyticsEventTracker';


function App(props) {

	const [toggleMenu, setToggleMenu] = useState(false)
	const [scrollTo, setScrollTo] = useState('')
	const [isMobile, setIsMobile] = useState(window.innerWidth < 740)


	const pages = ['Home', 'About Me', 'Projects']
	const gaEventTracker = useAnalyticsEventTracker("navbar");


	function openMenu() {
		//let gaEventTracker = useAnalyticsEventTracker("hamburgerMenu");
		gaEventTracker("click", "hamburgerMenu");
		setToggleMenu(true)
	}
	function closeMenu() {
		setToggleMenu(false)
	}
	useEffect(() => {
		window.addEventListener("resize", () => {
			setIsMobile(window.innerWidth < 740)
		})
		const TRACKING_ID = process.env.REACT_APP_GTAG; // OUR_TRACKING_ID
		ReactGA.initialize(TRACKING_ID);
	}, [props])

	useEffect(() => {
		if (toggleMenu === true)
			return

		if (scrollTo === '')
			return

		let extraPadding = 0
		//if(/Android/i.test(navigator.userAgent) ) {
		extraPadding = 68
		//}
		//console.log(document.getElementById(scrollTo).offsetTop)

		document.getElementById('container').scrollTo({
			left: 0,
			top: document.getElementById(scrollTo).offsetTop + (-1 * extraPadding * 1.5),
			behavior: "smooth",
		});


	}, [toggleMenu, scrollTo, isMobile])

	const navOptions = pages.map((page) => {
		

		const goTo = (page) => (event) => {
			setScrollTo(page);
			setToggleMenu(false);
			gaEventTracker("click", page);
			//ReactGA.send({ hitType: "pageview", page: `/${page}`, title: page });
		}
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
			<CssBaseline />
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
					zIndex={1}

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
					<Box
					>
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

	return (
		<Paper
			elevation={4}
			sx={{
				position: 'relative',
				zIndex: 99
			}}
		>
			<Box
				className="navbar"
				display='flex'
				alignItems={'center'}
				width={1}
				sx={{
					backgroundColor: (theme) => theme.palette.secondary.main,
					height: props.height || '68px',
					borderBottom: 'solid 1px black',
				}}
			>
				<Link
					variant='h4'
					margin={'0 auto 0 24px'}
					fontWeight={'500'}
					underline='none'
					href='https://www.mikalyoung.com/'
				>
					{'Mikal Young'}
				</Link>
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
		</Paper>
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
