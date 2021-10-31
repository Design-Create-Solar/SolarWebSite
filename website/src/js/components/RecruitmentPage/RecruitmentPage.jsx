import React from "react";
import { Default, Mobile, Desktop } from "../MultiplePages/constants";
import styles from "./RecruitmentPage.module.css";

const RecruitmentPage = () => {
  const Block = () => {
    return (
      <div className={styles.center}>
        <div
          className={styles.iframe}
          title="joinform"
          src="https://docs.google.com/forms/d/e/1FAIpQLSc2fQoHgrmrQSVNNdTDIXKew-SNxTc6g-ALmlwZkCraILVgwA/viewform?embedded=true"
        >
          Loading…
        </div>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <Desktop>
        <Block />
      </Desktop>
      <Default>
        <Block />
      </Default>
      <Mobile>
        <Block />
      </Mobile>
    </div>
  );
};

export default RecruitmentPage;
