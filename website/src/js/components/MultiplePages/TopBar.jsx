import React, { useContext } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { Default, Mobile, Desktop } from './constants';
import StyledButton from './StyledButton';
import { UserContext } from '../../../context/UserContext';
const topbarButtonInfo = [
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
		name: 'Meet the Team',
		link: '/team/officers',
	},
	{
		name: 'Join Us',
		link: '/join',
	},
];
function TopBar() {
	const history = useHistory();
	const { userData, setUserData } = useContext(UserContext);

	return (
		<Router>
			<div>
				<AppBar position='fixed' style={{ backgroundColor: 'black' }}>
					<Toolbar
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							padding: 0,
						}}
					>
						<Mobile>
							<Box
								style={{
									display: 'flex',
									overflowX: 'scroll',
								}}
							>
								{topbarButtonInfo.map((obj, idx) => {
									return (
										<StyledButton
											key={idx}
											style={{ order: idx + 1 }}
											onClick={() =>
												history.push({
													pathname: obj.link,
												})
											}
										>
											{obj.name}
										</StyledButton>
									);
								})}
							</Box>
						</Mobile>
						<Desktop>
							<Box
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexGrow: 1,
									width: '100%',
								}}
							>
								{topbarButtonInfo.map((obj, idx) => {
									return (
										<StyledButton
											key={idx}
											style={{ order: idx + 1 }}
											onClick={() =>
												history.push({
													pathname: obj.link,
												})
											}
										>
											{obj.name}
										</StyledButton>
									);
								})}
								{userData && userData.token !== null ? (
									<>
										<StyledButton
											style={{
												order:
													topbarButtonInfo.length + 1,
											}}
											onClick={() =>
												history.push({
													pathname: '/blocks',
												})
											}
										>
											Blocks
										</StyledButton>
										<StyledButton
											style={{
												order:
													topbarButtonInfo.length + 2,
											}}
											onClick={() => {
												localStorage.removeItem(
													'auth-token'
												);
												setUserData(null);
											}}
										>
											Logout
										</StyledButton>
									</>
								) : (
									<StyledButton
										style={{
											order: topbarButtonInfo.length + 1,
										}}
										onClick={() =>
											history.push({ pathname: '/login' })
										}
									>
										Login
									</StyledButton>
								)}
							</Box>
						</Desktop>
						<Default>
							<Box
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexGrow: 1,
									width: '100%',
								}}
							>
								{topbarButtonInfo.map((obj, idx) => {
									return (
										<StyledButton
											key={idx}
											style={{ order: idx + 1 }}
											onClick={() =>
												history.push({
													pathname: obj.link,
												})
											}
										>
											{obj.name}
										</StyledButton>
									);
								})}
								{userData && userData.token !== null ? (
									<>
										<StyledButton
											style={{
												order:
													topbarButtonInfo.length + 1,
											}}
											onClick={() =>
												history.push({
													pathname: '/blocks',
												})
											}
										>
											Blocks
										</StyledButton>
										<StyledButton
											style={{
												order:
													topbarButtonInfo.length + 2,
											}}
											onClick={() => {
												localStorage.removeItem(
													'auth-token'
												);
												setUserData(null);
											}}
										>
											Logout
										</StyledButton>
									</>
								) : (
									<StyledButton
										style={{
											order: topbarButtonInfo.length + 1,
										}}
										onClick={() =>
											history.push({ pathname: '/login' })
										}
									>
										Login
									</StyledButton>
								)}
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
