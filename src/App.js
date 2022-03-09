import React, { useEffect } from "react";
import { Container } from "reactstrap";
import Create from "./Create.js";
import Nav from "./Nav.js";
import List from "./List.js";
import "./App.css";
import Foot from "./Foot.js";
import { useDispatch } from "react-redux";

import { set_alert, set_priorities } from "./redux/jobSlice";
import AlertBox from "./AlertBox.js";

const App = () => {
  const dispatch = useDispatch();
  const pageUrl = "http://localhost:8080";

  const showAlert = (text,bgColor,color) =>{
    dispatch(set_alert({show:true,bgColor:bgColor, color:color, text:text}));
    let count = 2;  
    let timer = setInterval(function() {
      if(count<=0){
        clearInterval(timer);
        dispatch(set_alert({show:false,bgColor:bgColor, color:color, text:text}));
      }
      count--;
      }, 1000)
        
  }

  useEffect(() => {
    fetch(pageUrl+"/priorities", {
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
        <AlertBox/>
        <Create showAlert={showAlert} />
        <List showAlert={showAlert}/>
        <Foot />
      </Container>
    </div>
  );
};

export default App;
