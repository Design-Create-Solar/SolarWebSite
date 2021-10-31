import React, { useContext } from "react";
import { BlocksContext } from "../BlocksPage/BlocksContext";

import { Player } from "video-react";
import "../../../../node_modules/video-react/dist/video-react.css";

import { Default, Mobile, Desktop } from "../MultiplePages/constants";
import LogoHolder from "./LogoHolder";

import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const { blocks } = useContext(BlocksContext);
  const homepageBlocks = blocks.filter((block) => block.page === "HOME");
  const header = homepageBlocks[0]?.header;
  const text = homepageBlocks[0]?.text;

  const Block = () => {
    return (
      <div className={styles.info}>
        <h4 className={styles.header}>{header}</h4>
        <div className={styles.text}>{text}</div>
        <div className={styles.pad}>
          <Player
            playsInline
            autoplay={false}
            src="https://elasticbeanstalk-us-west-2-127661128201.s3-us-west-2.amazonaws.com/site-content/club-vid.mp4"
          />
        </div>
        <Player
          playsInline
          autoplay={false}
          src="https://elasticbeanstalk-us-west-2-127661128201.s3-us-west-2.amazonaws.com/site-content/Hydroponics+Video.mp4"
        />
      </div>
    );
  };

  return (
    <div className="landing">
      <LogoHolder />
      <Desktop>
        <Block />
      </Desktop>
      <Default>
        <Block />
      </Default>
      <Mobile>
        <div className={styles.infoMobile}>
          <div className={styles.info}>
            <h4 className={styles.header}>{header}</h4>
            <div className={styles.text}>{text}</div>
            <div className={styles.pad}>
              <Player
                playsInline
                autoplay={false}
                src="https://elasticbeanstalk-us-west-2-127661128201.s3-us-west-2.amazonaws.com/site-content/club-vid.mp4"
              />
            </div>
            <div className="pad">
              <Player
                playsInline
                autoplay={false}
                src="https://elasticbeanstalk-us-west-2-127661128201.s3-us-west-2.amazonaws.com/site-content/Hydroponics+Video.mp4"
              />
            </div>
          </div>
        </div>
      </Mobile>
    </div>
  );
};

export default LandingPage;
