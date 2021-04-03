import React, { useContext } from "react";
import { styled } from "@material-ui/styles";
import * as constants from "../MultiplePages/constants";

import GFXField from "./GFXField";
import GFXButton from "./GFXButton";
import GFXFlourish from "./GFXFlourish";
import GFXRadio from "./GFXRadio";

import { showErrorOnBlur } from "mui-rff";

import { Form } from "react-final-form";
import { Paper, Grid, Card, CardMedia } from "@material-ui/core";

import { BlocksContext } from "../../../context/BlocksContext"

import img from "./testimage.jpg";
import "./Blocks.css"

const BlocksPage = (props) => {
  const { blocks, setBlocks } = useContext(BlocksContext)

  const onSubmit = async (values) => {
    const { header, color, text, align } = values

    const newBlock = { page: "PROGRAMS", header, color, text, align }
    await fetch("http://localhost:5000/block/create", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlock)
    })
      .then((data) => data.json())
      .then((newId) => setBlocks([...blocks, { ...newBlock, _id: newId }]))
      .catch((err) => console.log(err))

    window.alert("Block successfully added!")
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
    // if (!values.images) {
    //   errors.images = "Provide at least one image(s).";
    // }
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
        <GFXRadio
          label="Color"
          name="color"
          margin="none"
          required={true}
          data={[
            { label: "white", value: constants.HOME_PAGE_LIGHT_COLOR },
            { label: "black", value: constants.HOME_PAGE_DARK_COLOR },
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
          label="Align"
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
          required={false}
          showError={showErrorOnBlur}
        />
      ),
    },
  ];

  const onEdit = async (values) => {
    await fetch("http://localhost:5000/block/updateByDBid/" + values.id, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    })
      .catch((err) => console.log(err))
    window.alert("Successfully edited!")
  }

  const onDelete = async (id) => {
    await fetch("http://localhost:5000/block/delete/" + id, {
      method: "PUT",
      mode: "cors"
    })
      .then(() => {
        setBlocks(blocks.filter(block => block._id !== id))
      })
      .catch((err) => console.log(err))

    window.alert("Successfuly deleted!")
  }

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

      {/* FOR ADDING BLOCKS */}
      <FancyH1>Add Blocks</FancyH1>
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
                    Add Block
                  </GFXButton>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
      {/* FOR EDITING BLOCKS */}
      <FancyH1>Edit Blocks</FancyH1>
      <GFXFlourish />
      {
        blocks.map((block) => {
          return (
            <Form
              key={block._id}
              onSubmit={onEdit}
              initialValues={{
                align: block.align,
                header: block.header,
                color: block.color,
                images: block.images,
                text: block.text,
                page: block.page,
                id: block._id
              }}
              validate={validate}
              render={({ handleSubmit, form, submitting, pristine }) => (
                <form className="edit-blocks-form" onSubmit={handleSubmit} noValidate>
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
                        <Grid item xs={12}>
                          <GFXField
                            label="_id"
                            name="id"
                            margin="none"
                            required={true}
                            disabled
                            showError={showErrorOnBlur}
                          />
                        </Grid>
                        {formFields.map((item, idx) => (
                          <Grid item xs={item.size} key={idx}>
                            {item.field}
                          </Grid>
                        ))}
                        <Grid item xs={12}>
                          <GFXRadio
                            label="Page"
                            name="page"
                            margin="none"
                            required={true}
                            data={[
                              { label: "HOME", value: "HOME" },
                              { label: "PROGRAMS", value: "PROGRAMS" },
                            ]}
                            showError={showErrorOnBlur}
                          />
                        </Grid>
                      </Grid>
                      <Grid item style={{ marginTop: 50 }}>
                        <GFXButton
                          variant="contained"
                          color="primary"
                          type="submit"
                          disabled={submitting}
                        >
                          Edit Block
                      </GFXButton>
                      </Grid>
                      <Grid item style={{ marginTop: 16 }}>
                        <GFXButton
                          type="button"
                          variant="contained"
                          onClick={() => onDelete(block._id)}
                        >
                          Delete Block
                      </GFXButton>
                      </Grid>
                    </Grid>
                  </Paper>
                </form>
              )
              } />
          )
        })
      }
    </Container >
  );
};

export default BlocksPage;

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
