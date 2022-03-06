import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEdit,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Container, Row, Table, Col } from "reactstrap";
import JobEdit from "./JobEdit";
import { useSelector } from "react-redux";
import Job from "./Job";

const List = () => {
  const [isOpen, setIsOpen] = useState(false);
  const jobs = useSelector((state) => state.jobReducer.jobs);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && <JobEdit handleClose={togglePopup} />}
      <Container>
        <Row className="jobListRow">
          <Row>Job List</Row>
          <Row>
            <Col>
              <div className="searchContainer">
                <input className="searchInput" type="text" id="input" />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="searchImage "
                />
              </div>
            </Col>
            <Col>
              <select name="priority" id="priority">
                <option value="all">Öncelik(Hepsi)</option>
                <option value="normal">Normal</option>
                <option value="onemli">Önemli</option>
                <option value="acil">Acil</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Table striped>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Priority</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {jobs &&
                  jobs.map((job) => {
                      console.log(job);
                    return <Job key={job.id} togglePopup={togglePopup} jobText={job.text} jobPri={job.priority}  />;
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
