import { withStyles } from "@material-ui/core/styles";
import { TextField } from "mui-rff";
import * as constants from "../constants";

const GFXField = withStyles({
  root: {
    "& label.MuiFormLabel-root": {
      color: constants.HOME_PAGE_LIGHT_COLOR,
      fontFamily: "Futura",
    },
    "& label.Mui-focused": {
      color: constants.HOME_PAGE_YELLOW,
    },
    "& .MuiInputBase-input": {
      color: constants.HOME_PAGE_LIGHT_COLOR,
      fontFamily: "Futura",
    },
    "& .MuiInput-underline": {
      "&:before": {
        borderBottomColor: constants.HOME_PAGE_LIGHT_COLOR,
      },
      "&:hover:before": {
        borderBottomColor: constants.HOME_PAGE_LIGHT_COLOR,
      },
      "&:after": {
        borderBottomColor: constants.HOME_PAGE_YELLOW,
      },
    },
  },
})(TextField);

export default GFXField;