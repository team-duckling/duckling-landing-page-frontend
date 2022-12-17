import React, { useState } from "react";
import styles from "../../../styles/components/navbar.module.scss"; // importing the css file
import Link from "next/link";
import classNames from "classnames";

export default function Navbar({ current }) {
  const [isSlideBarOpen, setIsSlideBarOpen] = useState(false);

  const onToggleSlideBar = () => {
    setIsSlideBarOpen(!isSlideBarOpen);
  };

  return (
    <div className={styles.navigationBar}>
      <div className={styles.container}>
        <h1 className={styles.brand}>Duckling</h1>

        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>{" "}
            {current === "home" ? (
              <span className={styles.current}>current page</span>
            ) : (
              ""
            )}{" "}
          </li>
          <li className={styles.menuItem}>
            <Link href="/members" className={styles.navLink}>
              Members
            </Link>{" "}
            {current === "members" ? (
              <span className={styles.current}>current page</span>
            ) : (
              ""
            )}{" "}
          </li>
          <li className={styles.menuItem}>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>{" "}
            {current === "about" ? (
              <span className={styles.current}>current page</span>
            ) : (
              ""
            )}{" "}
          </li>
        </ul>

        <button
          className={classNames(
            "hamburber hamburger--collapse",
            styles.hamburgerMenu,
            isSlideBarOpen ? "is-active" : ""
          )}
          type="button"
          onClick={onToggleSlideBar}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
  );
}
