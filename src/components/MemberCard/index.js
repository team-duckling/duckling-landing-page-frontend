import React from "react";
import { Card, Text } from "@nextui-org/react";

const MemberCard = (props) => {
  return (
    <Card
      isHoverable
      variant="bordered"
      css={{ mw: "400px" }}
      className={props.className}
    >
      <Card.Body>
        <Text>Member Card</Text>
      </Card.Body>
    </Card>
  );
};

export default MemberCard;
