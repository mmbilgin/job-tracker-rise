import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row } from "reactstrap";
import { edit_job } from "./redux/jobSlice";

const JobEdit = (props) => {
  const [editText, setEditText] = useState("");
  const [editPri, setEditPri] = useState("normal");
  const [editPriId, setEditPriId] = useState(1);
  const [valid,setValid] = useState(true)

  const dispatch = useDispatch();
  const duzenle = (id, text, priority,priorityId) => {
    if (text === "") {
      setValid(false);
    } else {
      dispatch(edit_job({ id: id, text: text, priority: priority, priorityId:priorityId }));
      props.handleClose();
    }
  };
  const priorities = useSelector((state) => state.jobReducer.priorities);
  useEffect(() => {
    setEditPri(props.editPri);
    setEditText(props.editText);
    setEditPriId(props.editPriId);
    console.log(props)
  },[props.editPri, props.editText,props.editPriId]);

  return (
    <div className="popup-box jobEditBox">
      <Container className="bg-white box">
        <Row className="title">Job Edit</Row>
        <Row className="subtitle">Job Name</Row>
        <Row>
          <input
            id="job_name"
            value={editText}
            className={valid?"":"formNotValid"}
            onChange={(event) => {
              setValid(true);
              setEditText(event.target.value)}}
          ></input>
        </Row>
        <Row className="subtitle">Job Priority</Row>
        <Row>
          <select
            name="priority"
            id="priority"
            value={editPri || "normal"}
            onChange={(event) => {
              setEditPriId(parseInt(event.target.options[event.target.selectedIndex].getAttribute('intvalue')))
              setEditPri(event.target.value)}
            }
          >
            {priorities.map((priority) => {
              return <option key={priority.id} intvalue={priority.intValue} value={priority.value}>{priority.name}</option>;
            })}
          </select>
        </Row>
        <Row className="buttons">
          <Col>
            <Button
              className="bg-secondary text-white"
              onClick={props.handleClose}
            >
              Cancel
            </Button>
          </Col>
          <Col>
            <Button
              className="bg-danger text-white"
              onClick={() => duzenle(props.editId, editText, editPri,editPriId)}
            >
              Save
            </Button>
          </Col>
        </Row>
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
      </Container>
    </div>
  );
};

export default JobEdit;
