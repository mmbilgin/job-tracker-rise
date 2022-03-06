import React from "react";
import { Container, Row } from "reactstrap";
import logo from "./logo.png";

const Nav = () => {
  return (
    <div>
      <Container>
        <Row className="logoRow">
          <div>
            <img src={logo} alt="LOGO" />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Nav;
