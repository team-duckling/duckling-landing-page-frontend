import React from "react";
import MemberCard from "../../src/components/MemberCard";
import styles from "../../styles/pages/members.module.scss";

const Members = () => {
  return (
    <div className={styles.membersPage}>
      <MemberCard className={styles.customizeMemberCard} />
    </div>
  );
};

export default Members;
