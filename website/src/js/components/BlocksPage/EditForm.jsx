import React from "react";
import { Form } from "react-final-form";
import { Paper, Grid } from "@material-ui/core";
import { showErrorOnBlur } from "mui-rff";
import { makeStyles } from "@material-ui/styles";
import { formFields } from "./formFields";
import { BlocksContext } from "../../../context/BlocksContext";
import GFXField from "../GFX/GFXField";
import GFXRadio from "../GFX/GFXRadio";
import GFXDropzone from "../GFX/GFXDropzone";
import GFXButton from "../GFX/GFXButton";
import "./Blocks.css";

export default function EditForm() {
  const context = React.useContext(BlocksContext);
  const { blocks, setBlocks, handleSave, validate } = context;
  const [imgs, setImages] = React.useState([]);

  React.useEffect(() => {
    let res = [];
    for (const block of blocks) {
      let tmp = []
      for (const img of block.images)
        tmp.push(`https://elasticbeanstalk-us-west-2-127661128201.s3-us-west-2.amazonaws.com/${img}`)

      res.push(tmp)
    }
    setImages(res);
  }, [blocks])

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

  const useStyles = makeStyles(() => ({
    previewContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      backgroundColor: 'rgb(36, 32, 41)',
      justifyContent: 'flex-start',
      width: "100%",
      margin: "1rem 0",
      padding: "0",
      color: "white",
    },
    preview: {
      backgroundColor: 'rgb(31, 27, 36)',
      boxShadow: "0.2rem 0.2rem rgba(0,0,0,0.2)",
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    previewImg: {
      objectFit: 'cover',
      color: 'rgb(31, 27, 36)',
      backgroundColor: 'rgb(31, 27, 36)',
      padding: '2rem',
      margin: '2rem',
      border: "1px solid yellow",
    },
  }));
  const classes = useStyles();

  return (
    <>
      {
        blocks.map((block, ind) => {
          return (
            <Form
              onSubmit={onEdit}
              initialValues={{
                align: block.align,
                header: block.header,
                color: block.color,
                text: block.text,
                page: block.page,
                id: block._id
              }}
              validate={validate}
              render={({ handleSubmit, submitting }) => (
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
                        <Grid item xs={12}>
                          <GFXDropzone
                            key={imgs}
                            dropzoneText="Drop/click images"
                            previewGridClasses={{
                              container: classes.previewContainer,
                              item: classes.preview,
                              image: classes.previewImg,
                            }}
                            filesLimit={10}
                            initialFiles={imgs[ind]}
                            maxFileSize={500000000000} // 50 MB
                            acceptedFiles={["image/*"]}
                            showPreviews={true}
                            showFileNames={true}
                            previewText={""}
                            showPreviewsInDropzone={false}
                            onChange={(files) => handleSave(files)}
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
    </>
  )
}