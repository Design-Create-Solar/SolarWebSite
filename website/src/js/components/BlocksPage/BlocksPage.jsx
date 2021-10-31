import React from "react";
import { styled } from "@material-ui/styles";
import { Card, CardMedia } from "@material-ui/core";
import { Flourish } from "../MultiplePages/GFXElems";

import AddForm from "./AddForm";
import EditForm from "./EditForm";
import img from "./image.jpg";

const BlocksPage = () => {
  return (
    <Container>
      <div style={{ height: "100px" }} />
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image={img}
          alt="Sample"
          title="Cover Image"
        />
        <div style={styles.overlay}>Add/Edit</div>
      </Card>

      <FancyH1>Add Blocks</FancyH1>
      <Flourish />
      <AddForm />
      <FancyH1>Edit Blocks</FancyH1>
      <Flourish />
      <EditForm />
    </Container>
  );
};

export default BlocksPage;

const FancyH1 = styled("h1")({
  color: "white",
  margin: "3% 20%",
  fontFamily: "Futura",
});

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "none",
  backgroundColor: "#121212",
});

const styles = {
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: {
    position: "relative",
    margin: "0 20% 0 20%",
  },
  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)",
    color: "white",
    fontSize: "3rem",
    fontFamily: "Futura",
  },
};
