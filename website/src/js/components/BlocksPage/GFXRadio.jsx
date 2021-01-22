import { withStyles } from "@material-ui/core/styles";
import { Radios } from "mui-rff";
import * as constants from "../MultiplePages/constants";

const GFXRadio = withStyles({
  root: {
    color: constants.HOME_PAGE_LIGHT_COLOR,
    "&:hover": {
      color: constants.HOME_PAGE_YELLOW,
    },
    "&$checked": {
      color: constants.HOME_PAGE_YELLOW,
    },
    "& ~ *": {
      color: constants.HOME_PAGE_LIGHT_COLOR,
      fontFamily: "Futura",
    },
  },
  checked: {},
})(Radios);

export default GFXRadio;
