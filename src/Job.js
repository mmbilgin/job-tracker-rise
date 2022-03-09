import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove_job } from "./redux/jobSlice";

const Job = ({ togglePopup, jobText, jobPri,jobPriText, jobId , jobPriId}) => {
  const priorities = useSelector((state) => state.jobReducer.priorities);
  const dispatch = useDispatch();
  const sil = (text, priority) => {
    dispatch(remove_job({ id: jobId }));
  };
//console.log(priorities.filter(pri => pri.intValue === jobPriId)[0].color)
  return (
    <tr>
      <td>{jobText}</td>
      <td>
        <div className="p-2 text-white" style={{"backgroundColor":priorities.filter(pri => pri.intValue === jobPriId)[0]?priorities.filter(pri => pri.intValue === jobPriId)[0].color:"black"}}>{jobPriText}</div>
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
