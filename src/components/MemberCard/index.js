import React from "react";
import { Card, Text } from "@nextui-org/react";
import styles from "../../../styles/components/memberCard.module.scss";
import classNames from "classnames";

const MemberCard = (props) => {
  const mockData = {
    name: "Nguyễn Trường Thành",
    avatar: "https://i.pravatar.cc/150?img=1",
    position: "Frontend Developer",
    domainName: "ThanhNT26",
  };

  return (
    <Card
      isHoverable
      variant="bordered"
      css={{ mw: "300px" }}
      className={classNames(props.className, styles.cardItem)}
    >
      <Card.Header className={styles.cardHeader}>
        <Text>Member</Text>
      </Card.Header>

      <Card.Divider />

      <Card.Body className={styles.cardBody}>
        <Text>
          <Text b>Name: </Text>
          {mockData.name}
        </Text>
        <Text>
          <Text b>Position: </Text>
          {mockData.position}
        </Text>
        <Text>
          <Text b>Domain: </Text>
          {mockData.domainName}
        </Text>
      </Card.Body>
    </Card>
  );
};

export default MemberCard;
