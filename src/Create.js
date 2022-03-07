import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { add_job } from "./redux/jobSlice";

const Body = () => {
  const jobs = useSelector((state) => state.jobReducer.jobs);
  const lastId = useSelector((state) => state.jobReducer.lastId);
  const [text, setText] = useState("");
  const [pri, setPri] = useState("");

  const priorities = useSelector((state) => state.jobReducer.priorities);

  const dispatch = useDispatch();
  const ekle = (text, priority) => {
    dispatch(add_job({ id: lastId + 1, text: text, priority: priority }));
    setText("");
    setPri("normal");
    console.log(jobs);
  };

  return (
    <div>
      <Container>
        <Row className="createRow">
          <Row className="title">Create New Job</Row>
          <Row className="other">
            <Col xs="6">
              <Row className="subtitle">Job Name</Row>
              <Row>
                <input
                  type="text"
                  className="job-name"
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                />
              </Row>
            </Col>

            <Col xs="4" className="other">
              <Row className="subtitle">Job Priority</Row>
              <Row>
                <select
                  name="priority"
                  id="priority"
                  value={pri}
                  onChange={(event) => setPri(event.target.value)}
                >
                  {priorities.map((priority) => {
                    return (
                      <option value={priority.value}>{priority.name}</option>
                    );
                  })}
                </select>
              </Row>
            </Col>
            <Col xs="2">
              <Row>
                <br />
              </Row>
              <Row>
                <Button color="primary" onClick={() => ekle(text, pri)}>
                  Create
                </Button>
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Body;
