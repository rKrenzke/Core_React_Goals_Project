import { useState, Fragment, useEffect } from "react";

import styles from "./ProgressBar.module.css";

export const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  const [qualityErrors, setQualityErrors] = useState(0);

  //useEffect to evaluate percentage and css classes

  const addPercent = () => {
    setPercentage((prevState) => prevState + 10);
  };

  const subtractPercent = () => {
    setPercentage((prevState) => prevState - 10);
  };

  let status = {};
  if (percentage <= 30) {
    status = { level: "Low", color: "#18af4a" };
  } else if (percentage > 30 && percentage <= 70) {
    status = { level: "Moderate", color: "#e69824" };
  } else {
    status = { level: "High", color: "#e53b3b" };
  }

  const wheelControlClasses = `${styles.outer_wheel} ${
    percentage <= 30
      ? styles.success
      : percentage > 30 && percentage <= 70
      ? styles.warning
      : styles.danger
  }`;
  const faceControlClasses = `${styles.face} ${
    percentage <= 30
      ? styles.smile
      : percentage > 30 && percentage <= 70
      ? styles.neutral
      : styles.sad
  }`;
  const mouthControlClasses = `${styles.mouth} ${
    percentage <= 30
      ? styles.happy
      : percentage > 30 && percentage <= 70
      ? ""
      : styles.frown
  }`;

  const trackerControlClasses = `${percentage <= 30
      ? styles.smile
      : percentage > 30 && percentage <= 70
      ? styles.neutral
      : styles.sad}`
  

  return (
    <Fragment>
      <h1>Your Chart Activity</h1>
      <div className={styles.main}>
        <div className={styles.card}>
        <section className={wheelControlClasses}>
          <div className={styles.inner_wheel} style={{transform: `rotate(${percentage * 3}deg)`}}>
          <span className={`${styles.tracker} ${trackerControlClasses}`}></span>
          </div>
            <div className={faceControlClasses}>
              <div className={`${styles.eye} ${styles.leftEye}`}></div>
              <div className={styles.eye}></div>
              <div className={mouthControlClasses}></div>
            </div>
        </section>
          <p>
            {"Timed-Out Charts: "}
            <span style={{ color: status.color }}>{status.level}</span>
          </p>
        </div>
        <div className={styles.card}>
        <section className={wheelControlClasses}>
          <div className={styles.inner_wheel}>
            <div className={faceControlClasses}>
              <div className={`${styles.eye} ${styles.leftEye}`}></div>
              <div className={styles.eye}></div>
              <div className={mouthControlClasses}></div>
            </div>
          </div>
        </section>
          <p>
            {"Quality Errors: "}
            <span style={{ color: status.color }}>{status.level}</span>
          </p>
        </div>
      </div>
        <button onClick={addPercent}>Add</button>
        <button onClick={subtractPercent}>Subtract</button>
    </Fragment>
  );
};
