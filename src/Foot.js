import React from "react";
import { Container } from "reactstrap";
import git from "./git.png";

const Foot = () => {
  return (
    <div className="footerJob">
      <Container>
        <div className="d-block">
          <span>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mmbilgin/job-tracker-rise"
            >
              <img src={git} alt="git" /> repository
            </a>
          </span>
          <span style={{ float: "right" }}>&copy;2022 Merve Bilgin</span>
        </div>
      </Container>
    </div>
  );
};

export default Foot;
