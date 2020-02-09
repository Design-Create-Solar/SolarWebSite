import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import * as constants from '../constants';
import { withStyles, fade } from '@material-ui/core/styles';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Default, Mobile, Desktop } from '../constants';
const StyledButton = withStyles({
	root: {
		//background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		color: constants.HOME_PAGE_LIGHT_TEXT_COLOR,
		miHeight: 48,
		padding: '10px 10px 10px 10px',
		fontSize: '20px',
		fontFamily: 'Futura',
		fontWeight: 500,
		minWidth: '7em',
		//boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		'&:hover': {
			backgroundColor: fade(constants.HOME_PAGE_YELLOW, 0.9),
			color: fade(constants.HOME_PAGE_DARK_TEXT_COLOR, 1)
		}
	}
})(Button);

function TopBar(props) {
	return (
		<Router>
			<div>
				<AppBar
					position='fixed'
					style={{ backgroundColor: constants.HOME_PAGE_DARK_COLOR }}
				>
					<Toolbar
						style={{
							//overflow: 'scroll',
							justifyContent: 'center',
							alignItems: 'center',
							padding: 0
						}}
					>
						<Mobile>
							<Box
								style={{
									display: 'flex',
									//	alignSelf: 'center',
									// justifyContent: 'center',
									// alignItems: 'center',
									overflowX: 'scroll'
									//padding: '10px'
									//	flexGrow: 1,
									//	width: '100%'
								}}
							>
								<StyledButton
									style={{
										order: 1
									}}
									onClick={() =>
										props.history.push({ pathname: '/' })
									}
								>
									Home
								</StyledButton>
								<StyledButton
									style={{
										order: 2
									}}
									onClick={() =>
										props.history.push({
											pathname: '/programs'
										})
									}
								>
									Programs
								</StyledButton>
								<StyledButton
									style={{
										order: 3
									}}
									onClick={() =>
										props.history.push({
											pathname: '/sponsors'
										})
									}
								>
									Sponsors
								</StyledButton>
								<StyledButton
									style={{
										order: 4
									}}
									onClick={() =>
										props.history.push({
											pathname: '/team'
										})
									}
								>
									Meet The Team
								</StyledButton>
								<StyledButton
									style={{
										order: 5
									}}
									onClick={() =>
										props.history.push({
											pathname: '/data'
										})
									}
								>
									Data
								</StyledButton>
							</Box>
						</Mobile>
						<Desktop>
							<Box
								style={{
									display: 'flex',
									//	alignSelf: 'center',
									justifyContent: 'center',
									alignItems: 'center',
									//overflowX: 'scroll'
									//padding: '10px'
									flexGrow: 1,
									width: '100%'
								}}
							>
								<StyledButton
									style={{
										order: 1
									}}
									onClick={() =>
										props.history.push({ pathname: '/' })
									}
								>
									Home
								</StyledButton>
								<StyledButton
									style={{
										order: 2
									}}
									onClick={() =>
										props.history.push({
											pathname: '/programs'
										})
									}
								>
									Programs
								</StyledButton>
								<StyledButton
									style={{
										order: 3
									}}
									onClick={() =>
										props.history.push({
											pathname: '/sponsors'
										})
									}
								>
									Sponsors
								</StyledButton>
								<StyledButton
									style={{
										order: 4
									}}
									onClick={() =>
										props.history.push({
											pathname: '/team'
										})
									}
								>
									Meet the Team
								</StyledButton>
								<StyledButton
									style={{
										order: 5
									}}
									onClick={() =>
										props.history.push({
											pathname: '/data'
										})
									}
								>
									Data
								</StyledButton>
							</Box>
						</Desktop>
						<Default>
							<Box
								style={{
									display: 'flex',
									//	alignSelf: 'center',
									justifyContent: 'center',
									alignItems: 'center',
									//overflowX: 'scroll'
									//padding: '10px'
									flexGrow: 1,
									width: '100%'
								}}
							>
								<StyledButton
									style={{
										order: 1
									}}
									onClick={() =>
										props.history.push({ pathname: '/' })
									}
								>
									Home
								</StyledButton>
								<StyledButton
									style={{
										order: 2
									}}
									onClick={() =>
										props.history.push({
											pathname: '/programs'
										})
									}
								>
									Programs
								</StyledButton>
								<StyledButton
									style={{
										order: 3
									}}
								>
									Sponsor
								</StyledButton>
								<StyledButton
									style={{
										order: 4
									}}
									onClick={() =>
										props.history.push({
											pathname: '/team'
										})
									}
								>
									Meet The Team
								</StyledButton>
								<StyledButton
									style={{
										order: 5
									}}
									onClick={() =>
										props.history.push({
											pathname: '/data'
										})
									}
								>
									Data
								</StyledButton>
							</Box>
						</Default>
					</Toolbar>
				</AppBar>
				<Mobile>
					<div style={{ height: '63px' }}></div>
				</Mobile>
				<Default>
					<div style={{ height: '63px' }}></div>
				</Default>
				<Desktop>
					<div style={{ height: '63px' }}></div>
				</Desktop>
			</div>
		</Router>
	);
}

const inboxLink = React.forwardRef((props, ref) => (
	<Link innerRef={ref} to='/projects' {...props} />
));

export default TopBar;
