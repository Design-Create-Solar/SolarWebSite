import React, { useEffect, useState, useContext } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { Default, Mobile, Desktop } from './constants';
import { makeStyles } from "@material-ui/styles";
import Header from "./Header";
import StyledButton from './StyledButton';
import { UserContext } from '../Login/UserContext';
import { BACK_BASE_URL } from '../MultiplePages/constants';

const navInfo = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'Programs',
		link: '/programs',
	},
	{
		name: 'Sponsors',
		link: '/sponsors',
	},
	{
		name: 'Team',
		link: '/team',
	},
	{
		name: 'Join',
		link: '/join',
	},
];

const useStyles = makeStyles(() => ({
	toolbar: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 0,
	},
	box: {
		display: 'flex',
		overflowX: 'scroll',
	},
	boxDesktop: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		flexGrow: 1,
		width: '100%',
	},
	button: {
		fontSize: '1rem',
	},
	sizing: {
		height: '63px',
	},
	dropdown: {
		display: "flex",
		flexDirection: "column",
		position: "absolute",
		top: "63px",
		backgroundColor: 'black',
	},
	flexVertical: {
		display: "flex",
		flexDirection: "column",
	},
}));


function TopBar() {
	const history = useHistory();
	const { loggedIn, setLoggedIn } = useContext(UserContext);
	const [dropdown, setDropdown] = useState(false);

	useEffect(() => {
    fetch(`${BACK_BASE_URL}/auth/verify`, {
      credentials: 'include',
      mode: 'cors',
      headers: {
        "Access-Control-Allow-Credentials": true,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if (res.status === 200) setLoggedIn(true);
			else setLoggedIn(false);
    })
    .catch((err) => console.error(err))
  }, [loggedIn, setLoggedIn]);

	const css = useStyles();
	const setRoute = (str) => { history.push({ pathname: str }) }
	const onDropdown = () => { setDropdown(!dropdown); }
	const clearAuth = () => {
		fetch(`${BACK_BASE_URL}/auth/logout`, {
			"method": "POST",
			credentials: 'include',
      mode: 'cors',
      headers: {
        "Access-Control-Allow-Credentials": true,
        'Content-Type': 'application/json',
      },
			body: JSON.stringify({ page: window.location.pathname })
		})
		.then((res) => {
			if (res.status === 301) {
				history.push("/")
			}
		});
		setLoggedIn(false);
	}

	return (
		<Router>
			<div>
				<AppBar position='fixed' style={{ backgroundColor: 'black' }}>
					<Toolbar className={css.toolbar}>
						<Mobile>
							<Box className={css.box}>
								<Header arr={[...navInfo]} onRoute={setRoute} />
							</Box>
						</Mobile>
						<Desktop>
							<Box className={css.boxDesktop}>
								<Header arr={[...navInfo]} onRoute={setRoute} />
								{loggedIn ? (
									<>
										<div className={css.flexVertical} style={{ order: navInfo.length + 1 }}>
											<StyledButton
												onClick={() => { onDropdown() }}
												className={css.button}
											>
												Edit
											</StyledButton>
											{dropdown ? (
												<div className={css.dropdown}>
													<StyledButton className={css.button} onClick={() => setRoute("/blocks")}>
														Blocks
													</StyledButton>
													{/* <StyledButton className={css.button} onClick={() => setRoute("/members")}>
														Members
													</StyledButton> */}
												</div>
											) : ''}
										</div>
										<StyledButton
											style={{ order: navInfo.length + 2 }}
											onClick={() => clearAuth()}
											className={css.button}
										>
											Logout
										</StyledButton>
									</>
								) : (
									<StyledButton
										style={{ order: navInfo.length + 1, }}
										onClick={() => setRoute('/login')}
										className={css.button}
									>
										Login
									</StyledButton>
								)}
							</Box>
						</Desktop>
						<Default>
							<Box className={css.boxDesktop}>
								<Header arr={[...navInfo]} onRoute={setRoute} />
								{loggedIn ? (
									<>
										<StyledButton
											style={{ order: navInfo.length + 1 }}
											onClick={() => onDropdown()}
											className={css.button}
										>
											Blocks
										</StyledButton>
										{dropdown ? (
											<div className={css.dropdown}>
												<StyledButton className={css.button} onClick={() => setRoute("/blocks")}>
													Blocks
												</StyledButton>
												{/* <StyledButton className={css.button} onClick={() => setRoute("/members")}>
													Members
												</StyledButton> */}
											</div>) : 0}
										<StyledButton
											style={{ order: navInfo.length + 2 }}
											onClick={() => clearAuth()}
											className={css.button}
										>
											Logout
										</StyledButton>
									</>
								) : (
									<StyledButton
										style={{ order: navInfo.length + 1, }}
										onClick={() => setRoute('/login')}
										className={css.button}
									>
										Login
									</StyledButton>
								)}
							</Box>
						</Default>
					</Toolbar>
				</AppBar>
				<Mobile>
					<div className={css.sizing} />
				</Mobile>
				<Default>
					<div className={css.sizing} />
				</Default>
				<Desktop>
					<div className={css.sizing} />
				</Desktop>
			</div>
		</Router>
	);
}

export default TopBar;
