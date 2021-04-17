/* credit goes to Sweeney Ngo for this beautiful Button */
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import * as constants from "../MultiplePages/constants";

const GFXButton = withStyles({
    root: {
        fontSize: 12,
        padding: "1rem 5rem",
        border: "1px solid",
        backgroundColor: "#1F1B24",
        borderColor: constants.HOME_PAGE_YELLOW,
        fontFamily: "Futura",
        color: constants.HOME_PAGE_YELLOW,
        borderRadius: "10rem",
        "&:hover": {
            backgroundColor: constants.HOME_PAGE_YELLOW,
            color: constants.HOME_PAGE_LIGHT_COLOR,
            borderColor: constants.HOME_PAGE_YELLOW,
            boxShadow: "none",
        },
        "&:active": {
            boxShadow: "none",
            backgroundColor: "#0062cc",
        },
        "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
        },
        "&:disabled": {
            borderColor: "#cdcdcd",
            color: "#454545",
        },
    },
})(Button);

export default GFXButton;