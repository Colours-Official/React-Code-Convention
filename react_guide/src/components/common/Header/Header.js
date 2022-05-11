//react
import React from "react";
import styles from './style.module.scss';

//css
import { BackBtn } from "components";

export default function Header() {
  return (
      <div className={styles.HeaderContainer}>
        <BackBtn />
        <div>헤더</div>
        <div>=</div>
      </div>
  );
}
