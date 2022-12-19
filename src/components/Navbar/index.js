import React, { useState } from "react";
import styles from "../../../styles/components/navbar.module.scss"; // importing the css file
import Link from "next/link";
import classNames from "classnames";
import { connect } from "react-redux";

const Navbar = (props) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const onToggleSlideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);

    props.dispatch({
      type: "TOGGLE_SIDEBAR",
      isSideBarOpen: !isSideBarOpen,
    });
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
          </li>
          <li className={styles.menuItem}>
            <Link href="/members" className={styles.navLink}>
              Members
            </Link>{" "}
          </li>
          <li className={styles.menuItem}>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>{" "}
          </li>
        </ul>

        <button
          className={classNames(
            "hamburber hamburger--collapse",
            styles.hamburgerMenu,
            isSideBarOpen ? "is-active" : ""
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
};

const mapStateToProps = (state) => ({
  initalState: state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
