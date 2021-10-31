import React from "react";
import Typing from "react-typing-animation";
import Box from "@material-ui/core/Box";
import { Default, Mobile, Desktop } from "../MultiplePages/constants";
import Logo from "./logo.png";
import styles from "./LogoHolder.module.css";
import "../MultiplePages/constants.css";

const texts = ["DESIGNERS", "CREATORS", "SOLAR"];
const base = "WE ARE  ";

const LogoHolder = () => {
  return (
    <div className={styles.container}>
      <Default>
        <img
          alt="logo"
          src={Logo}
          style={{ height: "35em", paddingBottom: "2em" }}
        />
      </Default>
      <Desktop>
        <img
          alt="logo"
          src={Logo}
          style={{ height: "35em", paddingBottom: "2em" }}
        />
      </Desktop>
      <Mobile>
        <img
          alt="logo"
          src={Logo}
          style={{ width: "60%", paddingBottom: "2em" }}
        />
      </Mobile>
      <Box style={{ minHeight: "5rem", textAlign: "center" }}>
        <Typing loop={true} hideCursor={true}>
          <span className={styles.text}>{base}</span>
          <span className={styles["special-text"]}>{texts[0]}</span>
          <Typing.Backspace count={texts[0].length + 1} delay={1500} />
          <span className={styles["special-text"]}>{texts[1]}</span>
          <Typing.Backspace count={texts[1].length + 1} delay={1500} />
          <span className={styles["special-text"]}>{texts[2]}</span>
          <Typing.Backspace
            count={texts[2].length + base.length + 3}
            delay={1000}
          />
        </Typing>
      </Box>
    </div>
  );
};

export default LogoHolder;
