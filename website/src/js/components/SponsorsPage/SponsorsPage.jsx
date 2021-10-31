import React from "react";
import { Button } from "../MultiplePages/GFXElems";
import styles from "./SponsorsPage.module.css";
import "../MultiplePages/constants.css";

const SponsorsPage = () => {
  const handleClick = () => {
    window.location.assign(
      "https://giving.ucla.edu/campaign/donate.aspx?Fund=64580C&AutoFN=Y"
    );
  };

  return (
    <div className={styles.container}>
      <div style={{ height: "100px" }} />
      <h1
        style={{
          color: "white",
          paddingTop: "2%",
          paddingBottom: "2%",
          fontFamily: "Futura",
          margin: "0 0 5px 0",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          textAlign: "center",
        }}
      >
        Sponsorship Packet:
      </h1>
      <div style={{ display: "flex", justifyContent: "center", height: 700 }}>
        <iframe
          title="sponsorspacket"
          src="https://drive.google.com/file/d/1miL-m87M9KGKtba5hjTUZX6xXt_gnszT/preview"
          width="853.33333333333"
          height="640"
        ></iframe>
      </div>
      <Button
        onClick={() => handleClick()}
        style={{ margin: "auto", marginTop: 0, marginBottom: "2rem" }}
      >
        Donate
      </Button>
    </div>
  );
};

export default SponsorsPage;
