import React, { useEffect } from "react";
import { Container } from "reactstrap";
import Create from "./Create.js";
import Nav from "./Nav.js";
import List from "./List.js";
import "./App.css";
import Foot from "./Foot.js";
import { useDispatch } from "react-redux";

import { set_priorities } from "./redux/jobSlice";

const App = () => {
  const dispatch = useDispatch();
  const pageUri = window.location.href.substring(0,window.location.href.length-1);
  console.log(pageUri)
  useEffect(() => {
    fetch(pageUri+":8080/priorities", {
      method: "GET",
      mode: "cors",
      headers: {},
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(set_priorities(json.priorities));
        console.log("Priorities from API: ");
        console.log(json.priorities);
      });
  });

  return (
    <div>
      <Container>
        <Nav />
        <Create />
        <List />
        <Foot />
      </Container>
    </div>
  );
};

export default App;
