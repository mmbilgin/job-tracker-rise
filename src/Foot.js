/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Container } from "reactstrap";

const Foot = () => {
  return (
    <div>
      <Container>
        <div className="d-block">
          <span >git repo</span>
          <span style={{float:"right"}}>&copy;2022 Merve Bilgin</span>
        </div>
      </Container>
    </div>
  );
};

export default Foot;
