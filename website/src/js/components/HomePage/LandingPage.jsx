import React, { Component } from "react";
import LogoHolder from "./LogoHolder";
import { styled } from "@material-ui/styles";
import * as constants from "../../constants";
import InfoArea from "../InfoArea";
import TopBar from "../TopBar";
import axios from "axios";

import checkUser from "../../../context/api";

//changed from const to var
var infoArray = [
  {
    header: "MISSION STATEMENT",
    color: constants.HOME_PAGE_LIGHT_COLOR,
    text:
      "Design Create Solar strives to bring UCLA students from different educational backgrounds together to brainstorm, design and ultimately produce a solar energy solution to energy-related issues within the UCLA community and deprived communities around the world.",
    align: "right",
  },
  {
    header: "About the Club",
    color: constants.HOME_PAGE_DARK_COLOR,
    text:
      "Founded in Spring 2019, Design Create Solar is a non-profit technology oriented student organization that strives to bring UCLA students from different educational backgrounds together to brainstorm, design and ultimately produce solar energy solutions to energy-related issues within the UCLA community and underprivileged communities around the world.",
    align: "left",
  },
];

export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/block/getByPage/landing")
      .then((response) => {
        console.log(response);
        this.setState({ data: response.data });
      });
    //loop through response and add to infoArray
    // var data = response.data;
    // for (var i = 0; i < data.length; i++) {
    //   var colorSelect;
    //   if (i % 2 === 0) {
    //     colorSelect = constants.HOME_PAGE_DARK_COLOR;
    //   } else {
    //     colorSelect = constants.HOME_PAGE_LIGHT_COLOR;
    //   }

    //   infoArray.push({
    //     header: data[i].header,
    //     color: colorSelect,
    //     text: data[i].text,
    //     align: data[i].direction,
    //   });
    // }
  }
  render() {
    const { data } = this.state;
    return (
      <Container>
        <TopBar history={this.props.history} />
        <LogoHolder />
        <InfoContainer order={2}>
          {infoArray.map((info) => {
            return (
              <InfoArea
                header={info.header}
                color={info.color}
                text={info.text}
                align={info.align}
              />
            );
          })}
          {data.map((obj) => {
            return (
              <InfoArea
                header={obj.header}
                color={obj.color}
                text={obj.text}
                align={obj.direction}
              />
            );
          })}
        </InfoContainer>
      </Container>
    );
  }
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "none",
});

const InfoContainer = styled("div")({
  order: 1,
  flex: 1,
});
