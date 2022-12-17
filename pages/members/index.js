import React, { useEffect } from "react";
import MemberCard from "../../src/components/MemberCard";
import styles from "../../styles/pages/members.module.scss";

const Members = () => {
  useEffect(() => {
    document.title = "Members";
  }, []);

  return (
    <div className={styles.membersPage}>
      <MemberCard className={styles.customizeMemberCard} />
    </div>
  );
};

export default Members;
