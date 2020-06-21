import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Default, Mobile, Desktop } from './constants';
import StyledButton from "./StyledButton"
function TopBar(props) {
	return (
		<Router>
			<div>
				<AppBar position='fixed' style={{ backgroundColor: 'black' }}>
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
								{/* <StyledButton
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
								</StyledButton> */}
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
								{/* <StyledButton
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
								</StyledButton> */}
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
								{/* <StyledButton
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
								</StyledButton> */}
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

export default TopBar;
