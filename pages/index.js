import React, { useEffect } from "react";
import styles from "../styles/pages/home.module.scss";
import NormalButton from "../src/components/NormalButton";
import ImageComponent from "../src/components/ImageComponent";
// import { CameraIcon } from "../src/components/Icons/CameraIcon";

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
          css={{ padding: "12px" }}
        />

        <div className={styles.imageContainer}>
          <ImageComponent className={styles.imageItem} />

          <ImageComponent className={styles.imageItem} />

          <ImageComponent className={styles.imageItem} />
        </div>
      </div>

      <div className={styles.mainGoal}>
        <div className={styles.title}>Engineering</div>
        <div className={styles.subTitle}>It’s the details that count</div>
        <div className={styles.detailInfo}>
          <p>
            Ensuring innovation products has enough capacity to “disrupt” the
            industry through emerging technology was our mission (and vision)
            since day one.
          </p>
          <br />
          <p>
            Our approach to technologies and people is tailored to each product.
            You will always work with team of experts who understand your end
            goal and support you all the way to the finish line, no matter where
            it is in the product lifecycle.
          </p>
          <br />
          <p>
            All of that establishes a strong partnership which results in
            world-class quality products on top of a solid technology
            foundation.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <ImageComponent className={styles.imageItem} />

          <ImageComponent className={styles.imageItem} />

          <ImageComponent className={styles.imageItem} />

          <ImageComponent className={styles.imageItem} />
        </div>

        <NormalButton
          buttonName="Our Engineering definition"
          className={styles.customizedBtn}
          color="primary"
          auto
          light
          // iconRight={<CameraIcon fill="currentColor" />}
          css={{ padding: "12px" }}
        />
      </div>
    </div>
  );
}
