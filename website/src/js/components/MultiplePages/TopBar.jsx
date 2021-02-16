import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { Default, Mobile, Desktop } from "./constants";
import StyledButton from "./StyledButton";
const topbarButtonInfo = [
  {
    "name": "Home",
    "link": "/"
  },
  {
    "name": "Programs",
    "link": "/programs"
  },
  {
    "name": "Sponsors",
    "link": "/sponsors"
  }, {
    "name": "Meet the Team",
    "link": "/team/officers"
  }, {
    "name": "Join Us",
    "link": "/join"
  }, {
    "name": "Login",
    "link": "/login"
  } /*, {
    "name": "Data",
    "link": "/data"
  } */
]
function TopBar(props) {
  const history = useHistory();
  return (
    <Router>
      <div>
        <AppBar position="fixed" style={{ backgroundColor: "black" }}>
          <Toolbar
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
            }}
          >
            <Mobile>
              <Box
                style={{
                  display: "flex",
                  overflowX: "scroll",
                }}
              >
                {
                  topbarButtonInfo.map((obj, idx) => {
                    return (
                      <StyledButton key={idx} style={{ order: idx + 1 }} onClick={() => history.push({ pathname: obj.link })}>
                        {obj.name}
                      </StyledButton>)
                  })
                }
              </Box>
            </Mobile>
            <Desktop>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 1,
                  width: "100%",
                }}
              >
                {
                  topbarButtonInfo.map((obj, idx) => {
                    return (
                      <StyledButton key={idx} style={{ order: idx + 1 }} onClick={() => history.push({ pathname: obj.link })}>
                        {obj.name}
                      </StyledButton>)
                  })
                }
              </Box>
            </Desktop>
            <Default>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 1,
                  width: "100%",
                }}
              >
                {
                  topbarButtonInfo.map((obj, idx) => {
                    return (
                      <StyledButton key={idx} style={{ order: idx + 1 }} onClick={() => history.push({ pathname: obj.link })}>
                        {obj.name}
                      </StyledButton>)
                  })
                }
              </Box>
            </Default>
          </Toolbar>
        </AppBar>
        <Mobile>
          <div style={{ height: "63px" }}></div>
        </Mobile>
        <Default>
          <div style={{ height: "63px" }}></div>
        </Default>
        <Desktop>
          <div style={{ height: "63px" }}></div>
        </Desktop>
      </div>
    </Router>
  );
}

export default TopBar;
