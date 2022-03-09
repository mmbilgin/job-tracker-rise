import React from "react";
import { useSelector } from "react-redux";

const AlertBox = (props) => {
  const alertBox = useSelector((state) => state.jobReducer.alertBox);
  console.log(alertBox)
  return (
    <div
      className="alertBox"
      style={{ backgroundColor: alertBox.bgColor, color: alertBox.color, opacity:alertBox.show?1:0, right:alertBox.show?"10%":0 }}
    >
      {alertBox.text}
    </div>
  );
};

export default AlertBox;
