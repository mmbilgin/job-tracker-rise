import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Job = (togglePopup,jobText,jobPri) => {
  return (
    <div>
      <tr>
        <td>Birinci iş</td>
        <td>
          <div className="p-2 bg-danger text-white">Acil</div>
        </td>
        <td>
          <button className="btn btn-secondary m-1" onClick={togglePopup}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button className="btn btn-secondary">
            <FontAwesomeIcon icon={faRemove} />
          </button>
        </td>
      </tr>
    </div>
  );
};

export default Job;
