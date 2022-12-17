import React, { useEffect } from "react";
import styles from "../styles/pages/home.module.scss";
import NormalButton from "../src/components/NormalButton";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className={styles.homepage}>
      <div className={styles.mainGoal}>
        <div className={styles.title}>Success</div>
        <div className={styles.subTitle}>
          Empower Innovation
          <br />
          with Software Craftsmanship
        </div>
        <div className={styles.detailInfo}>
          Our agile team of craftsmen has worked with companies varied in size
          <br />
          from startups to corporates, to build world-class quality products and
          <br />
          lead the road to success, since 2013.
        </div>

        <NormalButton
          buttonName="Find out"
          className={styles.customizedBtn}
          color="primary"
          auto
        />
      </div>
    </div>
  );
}
