import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEdit,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Row, Table, Col, Button } from "reactstrap";

const List = () => {
  return (
    <div>
      <Container>
        <Row className="jobListRow">
          <Row>Job List</Row>
          <Row>
            <Col>
              <div className="searchContainer">
                <input className="searchInput" type="text" id="input" value />
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
                <tr>
                  <td>birinci iş</td>
                  <td><div className="p-2 bg-danger text-white">Acil</div></td>
                  <td>
                    <button className="btn btn-secondary m-1">
                      <FontAwesomeIcon icon={faEdit} /> 
                    </button>
                    <button className="btn btn-secondary">
                      <FontAwesomeIcon icon={faRemove} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>ikinci iş</td>
                  <td><div className="p-2 bg-primary text-white">Normal</div></td>
                  <td><button className="btn btn-secondary m-1">
                      <FontAwesomeIcon icon={faEdit} /> 
                    </button>
                    <button className="btn btn-secondary">
                      <FontAwesomeIcon icon={faRemove} />
                    </button></td>
                </tr>
                <tr>
                  <td>üçüncü iş</td>
                  <td><div className="p-2 bg-warning text-white">Önemli</div></td>
                  <td><button className="btn btn-secondary m-1">
                      <FontAwesomeIcon icon={faEdit} /> 
                    </button>
                    <button className="btn btn-secondary">
                      <FontAwesomeIcon icon={faRemove} />
                    </button></td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default List;
