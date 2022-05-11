import React from "react";
import { Img } from "resources/image";
import styles from './style.module.scss';

function BackBtn() {
  return (
    <div className={styles.BackBtnContainer}>
      <img src={Img.backArr} />
    </div>
  );
}

export default BackBtn;
