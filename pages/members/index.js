import React, { useEffect } from "react";
import MemberCard from "../../src/components/MemberCard";
import styles from "../../styles/pages/members.module.scss";

const Members = () => {
  useEffect(() => {
    document.title = "Members";
  }, []);

  return (
    <div className={styles.membersPage}>
      <div className={styles.memberCardContainer}>
        <MemberCard
          className={styles.customizeMemberCard}
          userData={{
            name: "Tô Hoàng Phụng",
            position: "Frontend Developer",
            domainName: "PhungTH",
          }}
          isLeader
        />

        <MemberCard
          className={styles.customizeMemberCard}
          userData={{
            name: "Nguyễn Trường Thành",
            position: "Frontend Developer",
            domainName: "ThanhNT26",
          }}
        />

        <MemberCard
          className={styles.customizeMemberCard}
          userData={{
            name: "Trần Văn Huy Hoàng",
            position: "Frontend Developer",
            domainName: "HoangTVH",
          }}
        />
      </div>
    </div>
  );
};

export default Members;
