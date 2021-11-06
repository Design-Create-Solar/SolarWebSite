import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    position: "relative",
    left: "20%",
    width: "60%",
    height: "5px",
    color: "#fff",
    background: "linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)",
    backgroundSize: "400% 400%",
    animation: `$Gradient 15000ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes Gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
}));

export const GFXFlourish = () => {
  const styles = useStyles();
  return <div className={styles.main} />;
};

export default GFXFlourish;
