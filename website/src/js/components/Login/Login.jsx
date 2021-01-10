import React from "react";
// import { useHistory } from "react-router-dom";
import { Form } from "react-final-form";
import axios from "axios";

// import { UserContext } from "../../../context/UserContext";
import * as constants from "../MultiplePages/constants";
import TopBar from "../MultiplePages/TopBar";
import GFXField from "./GFXField";
import GFXButton from "./GFXButton";

import { showErrorOnBlur } from "mui-rff";

import { styled } from "@material-ui/styles";
import { Paper, Grid } from "@material-ui/core";

//const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Login = (props) => {
  // const { setUserData } = useContext(UserContext);
  // const history = useHistory();

  const onSubmit = async (values) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(300);
    console.log(JSON.stringify(values, 0, 2));
    await axios
      .post("http://localhost:5000/auth/login", {
        name: values.username,
        password: values.password,
        // check for matching username/password
      })
      .then((res) => {
        console.log(res);
        // alert("Login success!");
        // setUserData({
        //   token: res.data.token,
        //   user: res.data.user,
        // });
        localStorage.setItem("auth-token", res.data.token);
        // history.push("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Login failed!");
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
      <TopBar history={props.history} />
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
