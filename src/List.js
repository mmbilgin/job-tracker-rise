import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Container, Row, Table, Col } from "reactstrap";
import JobEdit from "./JobEdit";
import { useSelector } from "react-redux";
import Job from "./Job";

const List = () => {
  const [isOpen, setIsOpen] = useState(false);
  const jobs = useSelector((state) => state.jobReducer.jobs);
  const [editText, setEditText] = useState("");
  const [editPri, setEditPri] = useState("normal");
  const [editId, setEditId] = useState(-1);
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterSearch, setFilterSearch] = useState("");

  const priorities = useSelector((state) => state.jobReducer.priorities);

  const togglePopup = (id, text, pri) => {
    setEditId(id);
    setEditPri(pri);
    setEditText(text);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && (
        <JobEdit
          editId={editId}
          editText={editText}
          editPri={editPri}
          handleClose={togglePopup}
        />
      )}
      <Container>
        <Row className="jobListRow">
          <Row className="title">Job List</Row>
          <Row>
            <Col md="9" xs="7">
              <div className="searchContainer">
                <input
                  className="searchInput"
                  type="text"
                  id="input"
                  value={filterSearch}
                  onChange={(event) => setFilterSearch(event.target.value)}
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="searchImage "
                />
              </div>
            </Col>
            <Col md="3" xs="5">
              <select
                name="priority"
                id="priority"
                value={filterPriority}
                onChange={(event) => setFilterPriority(event.target.value)}
              >
                <option value="all">Öncelik(Hepsi)</option>
                {priorities.map((priority) => {
                  return (
                    <option key={priority.id} value={priority.value}>{priority.name}</option>
                  );
                })}
              </select>
            </Col>
          </Row>
          <Row>
            <Table striped>
              <thead>
                <tr>
                  <th className="w-auto">Name</th>
                  <th style={{width:"150px"}}>Priority</th>
                  <th style={{width:"110px"}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {jobs &&
                  jobs
                    .filter((job) =>
                      filterPriority === "all"
                        ? true
                        : job.priority === filterPriority
                    )
                    .filter((job) => job.text.includes(filterSearch))
                    .sort((a,b) => b.priorityId - a.priorityId)
                    .map((job) => {
                      return (
                        <Job
                          key={job.id}
                          togglePopup={togglePopup}
                          jobText={job.text}
                          jobPri={priorities.filter(pri=>pri.value===job.priority)[0].name}
                          jobId={job.id}
                        />
                      );
                    })}
              </tbody>
            </Table>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default List;
