import React from "react";
import styles from "../../../styles/components/sidebarMenu.module.scss";
import { connect } from "react-redux";
import classNames from "classnames";
import Link from "next/link";

const Sidebar = (props) => {
  const { isSideBarOpen } = props.initalState;

  const handleRouteClick = () => {
    props.dispatch({
      type: "TOGGLE_SIDEBAR",
      isSideBarOpen: false,
    });
  };

  return (
    <div
      className={classNames(
        styles.sidebarMenu,
        isSideBarOpen ? styles.isShow : styles.isClose
      )}
    >
      <ul className={styles.menuList}>
        <li className={styles.menuItem} onClick={handleRouteClick}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>{" "}
        </li>
        <li className={styles.menuItem} onClick={handleRouteClick}>
          <Link href="/members" className={styles.navLink}>
            Members
          </Link>{" "}
        </li>
        <li className={styles.menuItem} onClick={handleRouteClick}>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initalState: state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
