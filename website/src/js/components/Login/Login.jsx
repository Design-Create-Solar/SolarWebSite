import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-final-form";

import * as constants from "../MultiplePages/constants";
import { Field, Button } from "../MultiplePages/GFXElems";
import { showErrorOnBlur } from "mui-rff";

import { styled } from "@material-ui/styles";
import { Paper, Grid } from "@material-ui/core";
import { UserContext } from "./UserContext";
import { BACK_BASE_URL } from "../MultiplePages/constants";

const Login = (props) => {
  const history = useHistory();
  const { setLoggedIn } = useContext(UserContext);

  useEffect(() => {
    fetch(`${BACK_BASE_URL}/auth/verify`, {
      credentials: "include",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          history.push("/blocks");
        }
      })
      .catch((err) => console.log(err));
  }, [history]);

  const onSubmit = (values) => {
    console.log(`req sent to ${BACK_BASE_URL}/auth/login`);
    fetch(`${BACK_BASE_URL}/auth/login`, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.username,
        password: values.password,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          setLoggedIn(true);
          // history.push("/auth-success"); // send user to random page
          history.push("/blocks");
        } else alert("Wrong username or password");
      })
      .catch((error) => {
        console.error(error);
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
        <Field
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
        <Field
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
                  <Button
                    type="button"
                    variant="contained"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
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
