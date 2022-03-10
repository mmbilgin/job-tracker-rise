import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Container, Row, Table, Col } from "reactstrap";
import JobEdit from "./JobEdit";
import { useSelector } from "react-redux";
import Job from "./Job";

const List = ({ showAlert }) => {
  const [isOpen, setIsOpen] = useState(false);
  const jobs = useSelector((state) => state.jobReducer.jobs);
  const [editText, setEditText] = useState("");
  const [editPri, setEditPri] = useState("normal");
  const [editPriId, setEditPriId] = useState(1);
  const [editId, setEditId] = useState(-1);
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterSearch, setFilterSearch] = useState("");
  const [sortedData, setSortedData] = useState([]);
  const [sortNameDesc, setSortNameDesc] = useState(true);
  const [sortPriorityDesc, setSortPriorityDesc] = useState(true);

  const [currentSortStyle, setCurrentSortStyle] = useState("priority");

  const priorities = useSelector((state) => state.jobReducer.priorities);

  const togglePopup = (id, text, pri, priId) => {
    setEditId(id);
    setEditPri(pri);
    setEditText(text);
    setEditPriId(priId);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let array = jobs
      .filter((job) =>
        filterPriority === "all" ? true : job.priority === filterPriority
      )
      .filter((job) => job.text.includes(filterSearch));

    if (currentSortStyle === "name") {
      if (sortNameDesc) {
        setSortedData(array.sort((a, b) => a.text.localeCompare(b.text)));
      } else {
        setSortedData(
          array.sort((a, b) => a.text.localeCompare(b.text)).reverse()
        );
      }
    } else if (currentSortStyle === "priority") {
      if (sortPriorityDesc) {
        setSortedData(array.sort((a, b) => b.priorityId - a.priorityId));
      } else {
        setSortedData(
          array.sort((a, b) => b.priorityId - a.priorityId).reverse()
        );
      }
    }
  }, [
    jobs,
    filterPriority,
    filterSearch,
    currentSortStyle,
    sortPriorityDesc,
    sortNameDesc,
  ]);

  const sortDataBy = (type) => {
    if (currentSortStyle === "name") {
      console.log(sortNameDesc);
      setSortNameDesc(!sortNameDesc);
    } else if (currentSortStyle === "priority") {
      setSortPriorityDesc(!sortPriorityDesc);
    }

    setCurrentSortStyle(type);
  };

  return (
    <div>
      {isOpen && (
        <JobEdit
          editId={editId}
          editText={editText}
          editPri={editPri}
          editPriId={editPriId}
          handleClose={togglePopup}
          showAlert={showAlert}
        />
      )}
      <Container>
        <Row className="jobListRow">
          <Row className="title">İş Listesi</Row>
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
                    <option key={priority.id} value={priority.value}>
                      {priority.name}
                    </option>
                  );
                })}
              </select>
            </Col>
          </Row>
          <Row>
            <Table striped>
              <thead>
                <tr>
                  <th
                    role="button"
                    className="w-auto"
                    onClick={() => sortDataBy("name")}
                  >
                    Tanım ⬍
                  </th>
                  <th
                    role="button"
                    style={{ width: "150px" }}
                    onClick={() => sortDataBy("priority")}
                  >
                    Öncelik ⬍
                  </th>
                  <th style={{ width: "110px" }}>Eylem</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((job) => {
                  //console.log(jobs)

                  return (
                    <Job
                      key={job.id}
                      togglePopup={togglePopup}
                      jobText={job.text}
                      jobPriText={
                        priorities.filter(
                          (pri) => pri.value === job.priority
                        )[0]
                          ? priorities.filter(
                              (pri) => pri.value === job.priority
                            )[0].name
                          : job.priority
                      }
                      jobPri={job.priority}
                      jobId={job.id}
                      jobPriId={job.priorityId}
                      showAlert={showAlert}
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
