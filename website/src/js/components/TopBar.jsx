import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import * as constants from '../constants';
import { withStyles } from '@material-ui/core/styles';
//import { pink } from "@material-ui/core/colors";


const StyledButton = withStyles({
    root: {
      //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: constants.HOME_PAGE_LIGHT_TEXT_COLOR,
      height: 48,
      padding: '0 30px',
      fontSize: "20px", 
      //fontFamily: "Avenir Next"
      //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
  })(Button);

function TopBar() {
    
    return ( 
        <div>
            <AppBar position="static" style = {{ backgroundColor: constants.HOME_PAGE_DARK_COLOR }}>
                <Toolbar style = {{ display: "flex", justifyContent: "center" }}>
                    <StyledButton><a href="LandingPage.jsx" style={{ textDecoration: "none", color: constants.HOME_PAGE_LIGHT_TEXT_COLOR }}>Home</a></StyledButton>
                    <StyledButton>Projects</StyledButton>
                    <StyledButton>Support Us</StyledButton>
                    <StyledButton>Join the Team</StyledButton>
                    <StyledButton>Contact Us</StyledButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar