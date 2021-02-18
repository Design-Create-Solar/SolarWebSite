import React, { useState, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Form } from "react-final-form";
import axios from "axios";

import { UserContext } from "../../../context/UserContext";
import * as constants from "../MultiplePages/constants";
import GFXField from "./GFXField";
import GFXButton from "./GFXButton";

import { showErrorOnBlur } from "mui-rff";

import { styled } from "@material-ui/styles";
import { Paper, Grid } from "@material-ui/core";

const jwt = require("jsonwebtoken");
// const { TOKEN_SECRET } = process.env;
const TOKEN_SECRET = "thisisarbitrary";

const Login = (props) => {
  const { userData, setUserData } = useContext(UserContext);
  const [isLogin, setLogin] = useState(false);
  const history = useHistory();

  if (localStorage.getItem('auth-token')) { return (<Redirect to='/blocks' />) }
  // Async response to Local Storage & Backend
  const onSubmit = async (values) => {
    await axios
      .post("http://localhost:5000/auth/login", {
        name: values.username,
        password: values.password,
      })
      .then((res) => {
        // generate access token via JWT (+ process.env.ACCESS_KEY_ID)
        const accessToken = jwt.sign(
          { name: values.username, password: values.password },
          TOKEN_SECRET
        );

        // sending data to Backend + LS
        setUserData({
          token: accessToken,
          user: res.data.user,
        });

        localStorage.setItem("auth-token", accessToken);
        // history.push("/auth-success"); // send user to random page
        history.push("/blocks")

        // change login state
        setLogin(true); // no purpose as of now
        console.log(res);
        alert("Successful login!");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to login.");
      });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Provide a valid username.";
    }
    if (!values.password) {
      errors.password = "Provide a valid password.";
    }
    return errors;
  };

  const formFields = [
    {
      size: 12,
      field: (
        <GFXField
          label="username"
          name="username"
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
          label="pass"
          name="password"
          type="password"
          margin="none"
          required={true}
        />
      ),
    },
  ];

  return (
    <Container>
      <div style={{ height: "100px" }} />
      <h1
        style={{
          color: "white",
          paddingTop: "2%",
          paddingBottom: "2%",
          fontFamily: "Futura",
          margin: "0 0 5px 0",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Login
      </h1>
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
                margin: "2rem 20% 20% 20%",
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
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Container>
  );
};

export default Login;

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "none",
  backgroundColor: constants.HOME_PAGE_DARK_COLOR,
});
