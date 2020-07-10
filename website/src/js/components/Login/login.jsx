import React, { useState, useContext } from "react";
import { render } from "react-dom";
import { useHistory } from "react-router-dom";
import Styles from "../Styles";
import { Form, Field } from "react-final-form";
import axios from "axios";

import { UserContext } from "../../../context/UserContext";

//const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function App() {
  const { setUserData } = useContext(UserContext);
  const history = useHistory();
  const onSubmit = async (values) => {
    await axios
      .post("http://localhost:5000/auth/login", {
        name: values.name,
        password: values.password,
      })
      .then((res) => {
        console.log(res);
        alert("Login success!");
        setUserData({
          token: res.data.token,
          user: res.data.user,
        });
        localStorage.setItem("auth-token", res.data.token);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Login Failed!");
      });
  };
  return (
    <Styles>
      <h1>Login</h1>

      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Username"
              />
            </div>
            <div>
              <label>Password</label>
              <Field
                name="password"
                component="input"
                type="text"
                placeholder="Password"
              />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
    </Styles>
  );
}

//render(<App />, document.getElementById("root"));
