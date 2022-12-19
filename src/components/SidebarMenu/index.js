import React from "react";
import styles from "../../../styles/components/sidebarMenu.module.scss";
import { connect } from "react-redux";
import classNames from "classnames";

const Sidebar = (props) => {
  const { isSideBarOpen } = props.initalState;

  return (
    <div
      className={classNames(
        styles.sidebarMenu,
        isSideBarOpen ? styles.isShow : styles.isHidden
      )}
    >
      {isSideBarOpen ? "Sidebar is open" : "Sidebar is closed"}
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
