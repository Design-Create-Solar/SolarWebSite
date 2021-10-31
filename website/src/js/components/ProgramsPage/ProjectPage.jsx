import React, { useContext } from "react";
import InfoArea from "../MultiplePages/InfoArea";
import { BlocksContext } from "../BlocksPage/BlocksContext";
import styles from "./ProjectPage.module.css";

function ProjectPage() {
  const { blocks } = useContext(BlocksContext);
  const programs = blocks.filter((block) => block.page === "PROGRAMS");
  return (
    <div className={styles.container}>
      <div className={styles.info} order={2}>
        {programs.map((info, idx) => {
          return (
            <InfoArea
              key={idx}
              header={info.header}
              color={info.color}
              text={info.text}
              align={info.align}
              images={info.images}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectPage;
