import React, { useEffect } from "react";
import MemberCard from "../../src/components/MemberCard";
import styles from "../../styles/pages/members.module.scss";
import Link from "next/link";

const Members = () => {
  useEffect(() => {
    document.title = "Members";
  }, []);

  return (
    <div className={styles.membersPage}>
      <div className={styles.memberCardContainer}>
        <Link
          href="/members/phungth"
          key="phungth"
          className={styles.memberLink}
        >
          <MemberCard
            className={styles.customizeMemberCard}
            userData={{
              name: "Tô Hoàng Phụng",
              position: "Frontend Developer",
              domainName: "PhungTH",
            }}
            isLeader
          />
        </Link>

        <Link
          href="/members/thanhnt26"
          key="thanhnt26"
          className={styles.memberLink}
        >
          <MemberCard
            className={styles.customizeMemberCard}
            userData={{
              name: "Nguyễn Trường Thành",
              position: "Frontend Developer",
              domainName: "ThanhNT26",
            }}
          />
        </Link>

        <Link
          href="/members/hoangtvh"
          key="hoangtvh"
          className={styles.memberLink}
        >
          <MemberCard
            className={styles.customizeMemberCard}
            userData={{
              name: "Trần Văn Huy Hoàng",
              position: "Frontend Developer",
              domainName: "HoangTVH",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Members;
