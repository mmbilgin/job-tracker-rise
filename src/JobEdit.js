import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

const JobEdit = (props) => {
  return (
    <div className="popup-box">
      <Container className="bg-white box">
        <Row>Job Edit</Row>
        <Row>Job Name</Row>
        <Row>
          <input id="job_name"></input>
        </Row>
        <Row>Job Priority</Row>
        <Row>
          <select name="priority" id="priority">
            <option value="normal">Normal</option>
            <option value="onemli">Önemli</option>
            <option value="acil">Acil</option>
          </select>
        </Row>
        <Row>
          <Col>
            <Button className="bg-secondary text-white">Cancel</Button>
          </Col>
          <Col>
            <Button className="bg-danger text-white">Save</Button>
          </Col>
        </Row>
        <span className="close-icon" onClick={props.handleClose}>x</span>
      </Container>
    </div>
  );
};

export default JobEdit;
