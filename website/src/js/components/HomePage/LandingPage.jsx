import React, { useContext, useState, useEffect, setState } from "react";
import LogoHolder from "./LogoHolder";
import { styled } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import * as constants from "../../constants";
import InfoArea from "../InfoArea";
import TopBar from "../TopBar";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";
//form stuff
import Styles from "../Styles";
import { Form, Field } from "react-final-form";

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

export default function LandingPage(props) {
  const { userData, setUserData } = useContext(UserContext);
  let [blockData, setBlockData] = useState([]);
  let [showForm, setShowForm] = useState(false);
  useEffect(() => {
    console.log("in useeffect");
    axios
      .get("http://localhost:5000/block/getByPage/landing")
      .then((response) => {
        console.log(response.data);
        setBlockData(response.data);
      });
    console.log(blockData);
  }, []);

  const addButton = () => {
    //function that handles the info submitted to form

    if (userData && userData.user) {
      return (
        <Button
          onClick={() => {
            setShowForm(true);
          }}
        >
          Add
        </Button>
      );
    }
  };

  //function to show a form to input info for block
  const displayForm = () => {
    // onSubmit({
    //   id: 1.4,
    //   type: "text",
    //   text: "This was added by button",
    //   direction: "right",
    //   header: "Cool header bro",
    // });
    const onSubmit = async (values) => {
      await axios
        .post("http://localhost:5000/block/create", {
          id: values.ID,
          page: "landing",
          type: values.Type,
          text: values.Text,
          direction: values.Direction,
          header: values.Header,
          color: values.Color,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          alert("Error with axios request!");
        });
      await axios
        .get("http://localhost:5000/block/getByPage/landing")
        .then((response) => {
          setBlockData(response.data);
        });
    };
    return (
      <Styles>
        <h1>Block Content</h1>

        <Form
          onSubmit={onSubmit}
          initialValues={{}}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>ID</label>
                <Field
                  name="ID"
                  component="input"
                  type="text"
                  placeholder="ID"
                />
              </div>
              <div>
                <label>Type</label>
                <Field
                  name="Type"
                  component="input"
                  type="text"
                  placeholder="Type"
                />
              </div>
              <div>
                <label>Text</label>
                <Field
                  name="Text"
                  component="input"
                  type="text"
                  placeholder="Text"
                />
              </div>
              <div>
                <label>Direction</label>
                <Field
                  name="Direction"
                  component="input"
                  type="text"
                  placeholder="Direction"
                />
              </div>
              <div>
                <label>Header</label>
                <Field
                  name="Header"
                  component="input"
                  type="text"
                  placeholder="Header"
                />
              </div>
              <div>
                <label>Color</label>
                <Field
                  name="Color"
                  component="input"
                  type="text"
                  placeholder="Color"
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
  };

  return (
    <Container>
      <TopBar history={props.history} />
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
        {blockData.map((obj) => {
          return (
            <InfoArea
              header={obj.header}
              color={obj.color}
              text={obj.text}
              align={obj.direction}
            />
          );
        })}
        {addButton()}
        {showForm ? displayForm() : null}
      </InfoContainer>
    </Container>
  );
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
