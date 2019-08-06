import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as constants from "../constants";
import { withStyles, fade } from "@material-ui/core/styles";

const StyledButton = withStyles({
	root: {
		//background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		color: constants.HOME_PAGE_LIGHT_TEXT_COLOR,
		height: 48,
		padding: "0 30px",
		fontSize: "20px",
        fontFamily: "Avenir Next",
        fontWeight: 500,
		//boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		"&:hover": {
			backgroundColor: fade(constants.HOME_PAGE_YELLOW, 0.9),
			color: fade(constants.HOME_PAGE_DARK_TEXT_COLOR, 1)
		}
	}
})(Button);

function TopBar() {
	return (
		<div>
			<AppBar position="fixed" style={{ backgroundColor: constants.HOME_PAGE_DARK_COLOR }}>
				<Toolbar style={{ display: "flex", justifyContent: "center" }}>
					<StyledButton>
						{/* <a href="LandingPage.jsx" style={{ textDecoration: "none", color: constants.HOME_PAGE_LIGHT_TEXT_COLOR,  }}> */}
						Home
						{/* </a> */}
					</StyledButton>
					<StyledButton>Projects</StyledButton>
					<StyledButton>Support Us</StyledButton>
					<StyledButton>Join the Team</StyledButton>
					<StyledButton>Contact Us</StyledButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default TopBar;