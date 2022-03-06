import React from 'react'
import { Container } from 'reactstrap'
import Create from './Create.js'
import Nav from "./Nav.js"
import List from "./List.js"
import "./App.css"
import Foot from './Foot.js'
import JobEdit from './JobEdit.js'

const App = () => {
  return (
    <div>
      <Container>
        <Nav/>
        <Create/>
        <List/>
        <Foot/>
        <JobEdit/>
      </Container>
    </div>
  )
}

export default App