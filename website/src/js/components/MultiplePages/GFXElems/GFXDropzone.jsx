import { withStyles } from "@material-ui/core/styles";
import * as constants from "../constants";
import { DropzoneArea } from "material-ui-dropzone";

const GFXDropzone = withStyles({
  root: {
    backgroundColor: "rgb(35, 31, 40)",
    border: `1px solid ${constants.HOME_PAGE_YELLOW}`,
    boxShadow: "0.2rem 0.2rem rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.2s",
    "&:hover": {
      backgroundColor: constants.HOME_PAGE_YELLOW,
      color: constants.HOME_PAGE_LIGHT_COLOR,
      borderColor: constants.HOME_PAGE_YELLOW,
      boxShadow: "none",
      transition: "0.2s",

      "& .MuiDropzoneArea-text": {
        color: constants.HOME_PAGE_LIGHT_TEXT_COLOR,
      },

      "& .MuiDropzoneArea-icon": {
        color: constants.HOME_PAGE_LIGHT_TEXT_COLOR,
      },
    },

    "& .MuiDropzoneArea-active": {
      fontFamily: "Futura",
    },
    "& .MuiDropzoneArea-invalid": {
      color: constants.HOME_PAGE_DARK_TEXT_COLOR,
      fontFamily: "Futura",
    },
    "& .MuiDropzoneArea-text": {
      color: constants.HOME_PAGE_YELLOW,
      textTransform: "uppercase",
      fontFamily: "Futura",
      padding: "1rem",
      fontSize: "1rem",
      margin: "0",
    },
    "& .MuiDropzoneArea-icon": {
      color: constants.HOME_PAGE_YELLOW,
      fontFamily: "Futura",
      width: "36px",
      margin: "0",
    },
  },
})(DropzoneArea);

export default GFXDropzone;
