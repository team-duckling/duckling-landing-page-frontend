import React from "react";
import { Card, Text } from "@nextui-org/react";
import styles from "../../../styles/components/memberCard.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

const MemberCard = (props) => {
  return (
    <Card
      isHoverable
      isPressable
      variant="bordered"
      css={{ mw: "300px", m: "16px" }}
      className={classNames(props.className, styles.cardItem)}
    >
      <Card.Header className={styles.cardHeader}>
        {props.isLeader ? <Text b>Leader</Text> : <Text b>Member</Text>}
      </Card.Header>

      <Card.Divider />

      <Card.Body className={styles.cardBody}>
        <Text>
          <Text b>Name: </Text>
          {props.userData.name}
        </Text>
        <Text>
          <Text b>Position: </Text>
          {props.userData.position}
        </Text>
        <Text>
          <Text b>Domain: </Text>
          {props.userData.domainName}
        </Text>
      </Card.Body>
    </Card>
  );
};

MemberCard.propTypes = {
  className: PropTypes.string,
  userData: PropTypes.object,
  isLeader: PropTypes.bool,
};

MemberCard.defaultProps = {
  className: "",
  userData: {
    name: "Nguyễn Trường Thành",
    position: "Frontend Developer",
    domainName: "ThanhNT26",
  },
  isLeader: false,
};

export default MemberCard;
