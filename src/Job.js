import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { remove_job } from "./redux/jobSlice";

const Job = ({ togglePopup, jobText, jobPri,jobPriText, jobId , jobPriId}) => {
  const dispatch = useDispatch();
  const sil = (text, priority) => {
    dispatch(remove_job({ id: jobId }));
  };

  return (
    <tr>
      <td>{jobText}</td>
      <td>
        <div className="p-2 bg-danger text-white">{jobPriText}</div>
      </td>
      <td>
        <button
          className="btn btn-secondary m-1"
          onClick={() => {
            togglePopup(jobId, jobText, jobPri,jobPriId);
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="btn btn-secondary m-1" onClick={() => sil(jobId)}>
          <FontAwesomeIcon icon={faRemove} />
        </button>
      </td>
    </tr>
  );
};

export default Job;
