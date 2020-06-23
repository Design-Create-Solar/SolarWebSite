import React from "react";
import { render } from "react-dom";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";

import axios from "axios";

//const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await axios
    .post("http://localhost:5000/auth/login", {
      name: values.name,
      password: values.password,
    })
    .then((res) => {
      console.log(res);
      alert("Login success!");
    })
    .catch((error) => {
      console.log(error);
      alert("Login Failed!");
    });
};

const App = () => (
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

render(<App />, document.getElementById("root"));

export default App;
