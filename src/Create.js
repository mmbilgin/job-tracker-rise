import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Body = () => {
  return (
    <div>
      <Container>
        <Row className="createRow">
          <Row>Create New Job</Row>
          <Row>
            <Col xs="6">
              <Row>Job Name</Row>
              <Row>
                <input type="text" className="job-name" />
              </Row>
            </Col>

            <Col xs="4">
              <Row>Job Priority</Row>
              <Row>
                <select name="priority" id="priority">
                  <option value="normal">Normal</option>
                  <option value="onemli">Önemli</option>
                  <option value="acil">Acil</option>
                </select>
              </Row>
            </Col>
            <Col xs="2">
              <Row>
                <br />
              </Row>
              <Row>
                <Button color="primary">Create</Button>
              </Row>
            </Col>
          </Row>
        </Row>
        
      </Container>
    </div>
  );
};

export default Body;
