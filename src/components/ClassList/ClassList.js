import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state = {
      students: []
    }
  }

  componentDidMount(props){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then( (response) => {
      this.setState({students: response.data})
    })
  }

  render() {
    let mappedStudents = this.state.students.map((element, index) => {
      return(
       <Link to={`/student/${element.id}`} key={element.index}><h3 key={element.index}>{element.first_name}{element.last_name}</h3></Link>
      )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedStudents}
      </div>
    )
  }
}