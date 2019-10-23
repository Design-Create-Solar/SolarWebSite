import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as constants from "../constants";
import { withStyles, fade } from "@material-ui/core/styles";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const StyledButton = withStyles({
	root: {
		//background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		color: constants.HOME_PAGE_LIGHT_TEXT_COLOR,
		height: 48,
		padding: "0 30px",
		fontSize: "20px",
        fontFamily: "Futura",
        fontWeight: 500,
		//boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		"&:hover": {
			backgroundColor: fade(constants.HOME_PAGE_YELLOW, 0.9),
			color: fade(constants.HOME_PAGE_DARK_TEXT_COLOR, 1)
		}
	}
})(Button);

function TopBar(props) {
	return (
		<Router>
		<div>
			<AppBar position="fixed" style={{ backgroundColor: constants.HOME_PAGE_DARK_COLOR }}>
				<Toolbar style={{ display: "flex", justifyContent: "center" }}>
					<StyledButton onClick={() =>
              		props.history.push({ pathname: "/" })}>
				  		Home
				  	</StyledButton>
					<StyledButton onClick={() =>
              		props.history.push({ pathname: "/programs" })}>
						Programs
					</StyledButton>
					<StyledButton>Support Us</StyledButton>
					<StyledButton onClick={() =>
					props.history.push({ pathname: "/team" })}>
						The Team</StyledButton>
				</Toolbar>
			</AppBar>
		</div>
		</Router>
	);
}

const inboxLink = React.forwardRef((props, ref) => (
	<Link innerRef={ref} to="/projects" {...props} />
  ));

export default TopBar;
