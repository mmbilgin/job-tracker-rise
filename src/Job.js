import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "./Popup";
import { remove_job } from "./redux/jobSlice";

const Job = ({
  togglePopup,
  jobText,
  jobPri,
  jobPriText,
  jobId,
  jobPriId,
  showAlert,
}) => {
  const priorities = useSelector((state) => state.jobReducer.priorities);
  const dispatch = useDispatch();
  const sil = (text, priority) => {
    dispatch(remove_job({ id: jobId }));
    showAlert("Seçilen iş silindi.", "blue", "white");
  };
  const [isOpen, setIsOpen] = useState(false);

  var toggleRemovePopup = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <tr>
      <td>
        {jobText}
        {isOpen && (
          <Popup
            content="Are you sure you want to delete it ?"
            removeJob={sil}
            handleClose={toggleRemovePopup}
          />
        )}
      </td>
      <td>
        <div
          className="p-2 text-white"
          style={{
            backgroundColor: priorities.filter(
              (pri) => pri.intValue === jobPriId
            )[0]
              ? priorities.filter((pri) => pri.intValue === jobPriId)[0].color
              : "black",
          }}
        >
          {jobPriText}
        </div>
      </td>
      <td>
        <button
          className="btn btn-secondary m-1"
          onClick={() => {
            togglePopup(jobId, jobText, jobPri, jobPriId);
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button
          className="btn btn-secondary m-1"
          onClick={() => toggleRemovePopup(true)}
        >
          <FontAwesomeIcon icon={faRemove} />
        </button>
      </td>
    </tr>
  );
};

export default Job;
