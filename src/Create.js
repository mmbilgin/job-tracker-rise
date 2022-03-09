import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { add_job } from "./redux/jobSlice";

const Create = ({showAlert}) => {
  const lastId = useSelector((state) => state.jobReducer.lastId);
  const [text, setText] = useState("");
  const [pri, setPri] = useState("normal");
  const [priInt, setPriInt] = useState(1);
  const [valid,setValid] = useState(true)

  const priorities = useSelector((state) => state.jobReducer.priorities);

  const dispatch = useDispatch();
  const ekle = (text, priority, intValue) => {
    if (text === "") {
      setValid(false);
    } else {
      dispatch(add_job({ id: lastId + 1, text: text, priority: priority , priorityId: intValue }));
      setText("");
      setPri("normal");
      setPriInt(1);
      showAlert("Yeni bir iş başarıyla eklendi.","orange","white")
    }
  };
  return (
    <div>
      <Container>
        <Row className="createRow">
          <Row className="title">Create New Job</Row>
          <Row className="other">
            <Col xs="7" md="6">
              <Row className="subtitle">Job Name</Row>
              <Row>
                <input
                  type="text"
                  className={(valid?"":"formNotValid")+" job-name"}
                  id="createText"
                  value={text}
                  onChange={(event) => {
                    setValid(true);
                    setText(event.target.value)}}
                />
              </Row>
            </Col>

            <Col xs="5" md="4" className="other">
              <Row className="subtitle">Job Priority</Row>
              <Row>
                <select
                  name="priority"
                  id="priority"
                  value={pri}
                  onChange={(event) => 
                    {
                      setPriInt(parseInt(event.target.options[event.target.selectedIndex].getAttribute('intvalue')))
                      setPri(event.target.value)
                    }
                   }
                >
                  {priorities.map((priority) => {
                    return (
                      <option key={priority.id} value={priority.value} intvalue={priority.intValue}>{priority.name}</option>
                    );
                  })}
                </select>
              </Row>
            </Col>
            <Col md="2" xs="12">
              <Row>
                <br />
              </Row>
              <Row>
                <Button color="primary" onClick={() => ekle(text, pri, priInt)}>
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

export default Create;
