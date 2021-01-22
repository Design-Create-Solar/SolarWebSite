import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { styled } from "@material-ui/styles";
import * as constants from "../MultiplePages/constants";
import InfoArea from "../MultiplePages/InfoArea";
import TopBar from "../MultiplePages/TopBar";

import GFXField from "./GFXField";
import GFXButton from "./GFXButton";
import GFXFlourish from "./GFXFlourish";
import GFXRadio from "./GFXRadio";

import { showErrorOnBlur } from "mui-rff";

import { Form } from "react-final-form";
import { Paper, Grid, Card, CardMedia } from "@material-ui/core";

import img from "./testimage.jpg";

const BlocksPage = (props) => {
  // const { userData, setUserData } = useContext(UserContext);
  // const [isLogin, setLogin] = useState(false);
  // const history = useHistory();
  const [infoArray, updateInfoArray] = useState({
    header: "Sample Title",
    color: constants.HOME_PAGE_LIGHT_COLOR,
    text: "This is a standard block designed for testing purposes.",
    align: "center",
    images: [],
  });

  const onSubmit = async (values) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(300).then(
      updateInfoArray({
        header: values.header,
        color: values.color,
        text: values.text,
        align: values.align,
        images: values.images,
      })
    );
  };

  const validate = (values) => {
    const errors = {};
    if (!values.header) {
      errors.header = "Provide a valid heading/title.";
    }
    if (!values.color) {
      errors.color = "Provide a valid color, preferably in hexadecimal.";
    }
    if (!values.text) {
      errors.text = "Provide some text to support your header.";
    }
    if (!values.images) {
      errors.images = "Provide at least one image(s).";
    }
    return errors;
  };

  const formFields = [
    {
      size: 12,
      field: (
        <GFXField
          label="header"
          name="header"
          margin="none"
          required={true}
          showError={showErrorOnBlur}
        />
      ),
    },
    {
      size: 12,
      field: (
        <GFXField
          label="color"
          name="color"
          margin="none"
          required={true}
          showError={showErrorOnBlur}
        />
      ),
    },
    {
      size: 12,
      field: (
        <GFXField
          label="text"
          name="text"
          margin="none"
          required={true}
          showError={showErrorOnBlur}
        />
      ),
    },
    {
      size: 12,
      field: (
        <GFXRadio
          name="align"
          margin="none"
          required={true}
          data={[
            { label: "left", value: "left" },
            { label: "center", value: "center" },
            { label: "right", value: "right" },
          ]}
          showError={showErrorOnBlur}
        />
      ),
    },
    {
      size: 12,
      field: (
        <GFXField
          label="images"
          name="images"
          margin="none"
          required={true}
          showError={showErrorOnBlur}
        />
      ),
    },
  ];

  return (
    <Container>
      <TopBar history={props.history} />
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

      <GFXFlourish />
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        validate={validate}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper
              elevation={3}
              style={{
                padding: "10rem",
                margin: "0 20% 20% 20%",
                backgroundColor: "#1F1B24",
              }}
            >
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={2}
              >
                <Grid container alignItems="flex-end" spacing={5}>
                  {formFields.map((item, idx) => (
                    <Grid item xs={item.size} key={idx}>
                      {item.field}
                    </Grid>
                  ))}
                </Grid>
                <Grid item style={{ marginTop: 50 }}>
                  <GFXButton
                    type="button"
                    variant="contained"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </GFXButton>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <GFXButton
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </GFXButton>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </Container>
  );
};

export default BlocksPage;

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
