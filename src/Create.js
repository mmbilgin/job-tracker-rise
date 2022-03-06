import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { add_job } from "./redux/jobSlice";

const Body = () => {

  const jobs = useSelector(state => state.jobReducer.jobs)
  const lastId = useSelector(state => state.jobReducer.lastId)
  const [text, setText] = useState("");
  const [pri, setPri] = useState("");

  const dispatch = useDispatch()
  const ekle = (text,priority)=> {
    dispatch(add_job({id: lastId+1,text: text, priority: priority}));
    setText("")
    setPri("normal")
    console.log(jobs)
  }

  return (
    <div>
      <Container>
        <Row className="createRow">
          <Row>Create New Job</Row>
          <Row>
            <Col xs="6">
              <Row>Job Name</Row>
              <Row>
                <input type="text" className="job-name" value={text} onChange={event=>setText(event.target.value)}/>
              </Row>
            </Col>

            <Col xs="4">
              <Row>Job Priority</Row>
              <Row>
                <select name="priority" id="priority" value={pri} onChange={event=>setPri(event.target.value)}>
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
                <Button color="primary" onClick={()=>ekle(text,pri)}>Create</Button>
              </Row>
            </Col>
          </Row>
        </Row>
        
      </Container>
    </div>
  );
};

export default Body;
