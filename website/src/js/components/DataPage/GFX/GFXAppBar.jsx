import { withStyles } from "@material-ui/core/styles";
import * as constants from "../../MultiplePages/constants";
import { AppBar } from "@material-ui/core";

const GFXAppBar = withStyles({
  root: {
    transition: "0.2s",
    "&:hover": {
      color: constants.HOME_PAGE_LIGHT_COLOR,
      transition: "0.2s",
    },

    "& .MuiTab-textColorPrimary": {
      fontFamily: "Futura",
      color: "#fff",
    },
    "& .PrivateTabIndicator-colorPrimary-5": {
      backgroundColor: constants.HOME_PAGE_YELLOW,
    },
    "& .MuiDropzoneArea-invalid": {
      color: constants.HOME_PAGE_DARK_TEXT_COLOR,
      fontFamily: "Futura",
    },
  },
})(AppBar);

export default GFXAppBar;
