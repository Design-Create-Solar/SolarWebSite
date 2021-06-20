import React from "react";
import { Form } from "react-final-form";
import { Paper, Grid } from "@material-ui/core";
import { formFields } from "./formFields";
import GFXButton from "./GFXElems/GFXButton";
import GFXDropzone from "./GFXElems/GFXDropzone";
import { BlocksContext } from "./BlocksContext";
import "./Blocks.css";
import { BACK_BASE_URL } from "../MultiplePages/constants";

export default function AddForm() {
  const context = React.useContext(BlocksContext);
  const { blocks, setBlocks, images, handleSave, validate } = context;

  const onSubmit = async (values) => {
    const { header, color, text, align } = values;
    const formdata = new FormData();

    const imgNames = [];
    images.forEach((img, i) => {
      formdata.append("file" + i, img);
      imgNames.push(`myapp/${img.name}`);
    })

    const newBlock = { page: "PROGRAMS", header, color, text, align, images: imgNames };

    await fetch(
      `${BACK_BASE_URL}/block/create?${new URLSearchParams(newBlock)}`,
      {
        method: "POST",
        mode: "cors",
        body: formdata,
      }
    )
      .then((data) => data.json())
      .then((newId) => {
        setBlocks([...blocks, { ...newBlock, _id: newId }])
      })
      .catch((err) => console.log(err))

    window.alert("Block successfully added!")
  };
  return (
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
              <GFXDropzone
                dropzoneText="Drop/click images"
                filesLimit={10}
                maxFileSize={500000000000} // 50 MB
                acceptedFiles={["image/*"]}
                showPreviews={true}
                showPreviewsInDropzone={false}
                onChange={(files) => handleSave(files)}
              />
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
  )
}