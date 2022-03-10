import React from "react";
import { Button, Container, Row } from "reactstrap";

const Popup = (props) => {
  return (
    <div className="popup-box jtr-popup">
      <div className="box">
        
        <Container>
            <Row>
            <div>{props.content}</div>
            </Row>
            <Row>
            <div>
          <Button
            className="bg-secondary text-white"
            onClick={props.handleClose}
          >
            Vazgeç
          </Button>
          <Button className="bg-danger text-white" onClick={props.removeJob}>
            Kabul Et
          </Button>
        </div>
            </Row>
        </Container>
        
      </div>
    </div>
  );
};

export default Popup;
