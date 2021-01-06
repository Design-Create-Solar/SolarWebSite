<<<<<<< HEAD
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
  let [showAddForm, setShowAddForm] = useState(false);
  let [showDeleteForm, setShowDeleteForm] = useState(false);
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
    if (userData && userData.user) {
      return (
        <Button
          onClick={() => {
            setShowAddForm(true);
          }}
        >
          Add
        </Button>
      );
    }
  };

  const deleteButton = () => {
    if (userData && userData.user) {
      return (
        <Button
          onClick={() => {
            setShowDeleteForm(true);
          }}
        >
          Delete
        </Button>
      );
    }
  };

  //function to show a form to input info for block
  const displayAddForm = () => {
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
    const onPreview = () => {
      setBlockData([
        ...blockData,
        {
          id: 1.999,
          page: "landing",
          type: document.getElementById("Type").value,
          text: document.getElementById("Text").value,
          direction: document.getElementById("Direction").value,
          header: document.getElementById("Header").value,
          color: document.getElementById("Color").value,
        },
      ]);
    };
    return (
      <Styles>
        <h1>Add Block</h1>
        <h3>Fill as many fields as possible to ensure block creation.</h3>

        <Form
          onSubmit={onSubmit}
          initialValues={{}}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>ID</label>
                <Field
                  id="ID"
                  name="ID"
                  component="input"
                  type="text"
                  placeholder="ID"
                />
              </div>
              <div>
                <label>Type</label>
                <Field
                  id="Type"
                  name="Type"
                  component="input"
                  type="text"
                  placeholder="Type"
                />
              </div>
              <div>
                <label>Text</label>
                <Field
                  id="Text"
                  name="Text"
                  component="input"
                  type="text"
                  placeholder="Text"
                />
              </div>
              <div>
                <label>Direction</label>
                <Field
                  id="Direction"
                  name="Direction"
                  component="input"
                  type="text"
                  placeholder="Direction"
                />
              </div>
              <div>
                <label>Header</label>
                <Field
                  id="Header"
                  name="Header"
                  component="input"
                  type="text"
                  placeholder="Header"
                />
              </div>
              <div>
                <label>Color</label>
                <Field
                  id="Color"
                  name="Color"
                  component="input"
                  type="text"
                  placeholder="Color"
                />
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                  Save
                </button>
                <button
                  type="button"
                  onClick={onPreview}
                  disabled={submitting || pristine}
                >
                  Preview
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset Form Inputs
                </button>
              </div>
            </form>
          )}
        />
      </Styles>
    );
  };

  const displayDeleteForm = () => {
    const onSubmit = async (values) => {
      await axios
        .put("http://localhost:5000/block/delete", {
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
        <h1>Delete Block</h1>
        <h3>
          Fill as many fields as possible to ensure deletion of the target
          block.
        </h3>

        <Form
          onSubmit={onSubmit}
          initialValues={{}}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>ID</label>
                <Field
                  id="ID"
                  name="ID"
                  component="input"
                  type="text"
                  placeholder="ID"
                />
              </div>
              <div>
                <label>Type</label>
                <Field
                  id="Type"
                  name="Type"
                  component="input"
                  type="text"
                  placeholder="Type"
                />
              </div>
              <div>
                <label>Text</label>
                <Field
                  id="Text"
                  name="Text"
                  component="input"
                  type="text"
                  placeholder="Text"
                />
              </div>
              <div>
                <label>Direction</label>
                <Field
                  id="Direction"
                  name="Direction"
                  component="input"
                  type="text"
                  placeholder="Direction"
                />
              </div>
              <div>
                <label>Header</label>
                <Field
                  id="Header"
                  name="Header"
                  component="input"
                  type="text"
                  placeholder="Header"
                />
              </div>
              <div>
                <label>Color</label>
                <Field
                  id="Color"
                  name="Color"
                  component="input"
                  type="text"
                  placeholder="Color"
                />
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                  Delete
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset Form Inputs
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
        {deleteButton()}
        {showAddForm ? displayAddForm() : null}
        {showDeleteForm ? displayDeleteForm() : null}
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
=======
import React, { Component } from 'react';
import LogoHolder from './LogoHolder';
import { styled } from '@material-ui/styles';
import * as constants from '../MultiplePages/constants';
import '../../../../node_modules/video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';
import TopBar from '../MultiplePages/TopBar';
import { Default, Mobile, Desktop } from '../MultiplePages/constants';

const infoArray = [
	{
		header: 'MISSION STATEMENT',
		color: constants.HOME_PAGE_LIGHT_COLOR,
		text:
			'Design Create Solar strives to bring UCLA students from different educational backgrounds together to brainstorm, design and ultimately produce a solar energy solution to energy-related issues within the UCLA community and deprived communities around the world.',
		align: 'right'
	},
	{
		header: 'About the Club',
		color: constants.HOME_PAGE_DARK_COLOR,
		text:
			'Founded in Spring 2019, Design Create Solar is a non-profit technology oriented student organization that strives to bring UCLA students from different educational backgrounds together to brainstorm, design and ultimately produce solar energy solutions to energy-related issues within the UCLA community and underprivileged communities around the world.',
		align: 'left'
	}
];

export default class LandingPage extends Component {
	render() {
		return (
			<Container>
				<TopBar history={this.props.history} />
				<LogoHolder />
				{/* <InfoContainer order={2}>
                {
                    infoArray.map(info=>{return(
                        <InfoArea header={info.header} color={info.color} text={info.text} align={info.align}/>
                    )})
                }
                </InfoContainer> */}
				<Desktop>
					<BetterInfoContainer>
						<InfoHeader>{infoArray[1].header}</InfoHeader>
						<ActualText>{infoArray[1].text}</ActualText>
						{/* <video src='http://localhost:5000/static/poo.mp4' /> */}
						<Player
							playsInline
							autoplay={false}
							// poster="/assets/poster.png"
							src='https://elasticbeanstalk-us-west-1-363373488085.s3-us-west-1.amazonaws.com/test/poo.mp4'
						/>
					</BetterInfoContainer>
				</Desktop>
				<Default>
					<BetterInfoContainer>
						<InfoHeader>{infoArray[1].header}</InfoHeader>
						<ActualText>{infoArray[1].text}</ActualText>
						<Player
							playsInline
							autoplay={false}
							// poster="/assets/poster.png"
							src='https://elasticbeanstalk-us-west-1-363373488085.s3-us-west-1.amazonaws.com/test/poo.mp4'
						/>
					</BetterInfoContainer>
				</Default>
				<Mobile>
					<BetterInfoContainerMObile>
						<InfoHeader>{infoArray[1].header}</InfoHeader>
						<ActualText mobile>{infoArray[1].text}</ActualText>
						<Player
							playsInline
							autoplay={false}
							// poster="/assets/poster.png"
							src='https://elasticbeanstalk-us-west-1-363373488085.s3-us-west-1.amazonaws.com/test/poo.mp4'
						/>
					</BetterInfoContainerMObile>
				</Mobile>
			</Container>
		);
	}
}

const BetterInfoContainerMObile = styled('div')({
	// padding: '4em 5em',
	// margin: "0 5em",
	textAlign: 'center',
	fontFamily: 'Futura',
	fontSize: '2em',
	backgroundColor: constants.HOME_PAGE_LIGHT_COLOR
	// backgroundImage: "url(https://www.transparenttextures.com/patterns/leather.png)",
});

const BetterInfoContainer = styled('div')({
	padding: '4em 5em',
	// margin: "0 5em",
	textAlign: 'center',
	fontFamily: 'Futura',
	fontSize: '2em',
	backgroundColor: constants.HOME_PAGE_LIGHT_COLOR
	// backgroundImage: "url(https://www.transparenttextures.com/patterns/leather.png)",
});

const Container = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	overflow: 'none'
});

const InfoHeader = styled('h4')({
	fontWeight: 500,
	fontSize: '1.5em',
	textTransform: 'uppercase',
	fontFamily: 'Futura',
	color: constants.HOME_PAGE_DARK_COLOR
});

const ActualText = styled('div')({
	color: constants.HOME_PAGE_DARK_TEXT_COLOR
>>>>>>> data_display
});
