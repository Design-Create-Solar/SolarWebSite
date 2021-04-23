import React, { useContext, useState } from "react";
import { styled, makeStyles } from "@material-ui/styles";
import * as constants from "../MultiplePages/constants";
import GFXField from "../GFX/GFXField";
import GFXButton from "../GFX/GFXButton";
import GFXFlourish from "../GFX/GFXFlourish";
import GFXRadio from "../GFX/GFXRadio";
import GFXDropzone from "../GFX/GFXDropzone";

import { showErrorOnBlur } from "mui-rff";

import { Form } from "react-final-form";
import { Paper, Grid, Card, CardMedia } from "@material-ui/core";
import { BlocksContext } from "../../../context/BlocksContext";

import img from "../GFX/testimage.jpg";

const EditMembersPage = (props) => {
  const { blocks, setBlocks } = useContext(BlocksContext);
  const [images, setImages] = useState([]);

  const useStyles = makeStyles(() => ({
    previewContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      backgroundColor:'rgb(36, 32, 41)',
      justifyContent:'flex-start',
      width: "100%",
      margin: "1rem 0",
      padding: "0",
      color: "white",
    },
    preview: {
      backgroundColor:'rgb(31, 27, 36)',
      boxShadow: "0.2rem 0.2rem rgba(0,0,0,0.2)",
      width:'100%',
      height:'100%',
      objectFit: 'cover',
    },
    previewImg: {
      objectFit:'cover',
      color:'rgb(31, 27, 36)',
      backgroundColor:'rgb(31, 27, 36)',
      padding:'2rem',
      margin:'2rem',
      border: "1px solid yellow",
    },
  }));

    const onSubmit = async (values) => {
        const { header, color, text, align } = values;
        const formdata = new FormData();
    }
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
            return errors;
    };

  const formFields = [
    {
      size: 12,
      field: (
        <GFXField
          label="name"
          name="name"
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
            label="email"
            name="email"
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
          multiline
          label="major"
          name="major"
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
            label="Year"
            name="year"
            margin="none"
            required={true}
            data={[
              { label: "Freshman", value: "Freshman" },
              { label: "Sophomore", value: "Sophomore" },
              { label: "Junior", value: "Junior" },
              { label: "Senior", value: "Senior" },
              { label: "Other", value: "Other" },
            ]}
            showError={showErrorOnBlur}
          />
        ),
      },
      {
        size: 12,
        field: (
          <GFXField
            multiline
            label="What are your interests?"
            name="interests"
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
            label="Would you want our bi-weekly newsletter?"
            name="newsletter"
            margin="none"
            required={true}
            data={[
              { label: "Yes", value: constants.HOME_PAGE_LIGHT_COLOR },
              { label: "No", value: constants.HOME_PAGE_DARK_COLOR },
            ]}
            showError={showErrorOnBlur}
          />
        ),
      },
  ];

  const classes = useStyles();

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
        <div style={styles.overlay}>Members</div>
      </Card>

      {/* FOR ADDING BLOCKS */}
      <FancyH1>Tell us about yourself.</FancyH1>
      <GFXFlourish />
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        validate={validate}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form className="add-blocks-form" onSubmit={handleSubmit} noValidate>
            <Paper
              elevation={3}
              style={{
                padding: "10rem",
                margin: "0 20% 5% 20%",
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
    </Container >
  );
};

export default EditMembersPage;

const FancyH1 = styled("h1")({
  color: "white",
  margin: "3% 20%",
  fontFamily: "Futura"
})

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
