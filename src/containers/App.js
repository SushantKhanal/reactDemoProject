import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('Inside app.js constructor:: ', props);
  }

  componentWillMount(){
    console.log("Inside app.js componentWillMount()");
  }

  componentDidMount(){
    console.log("Inside app.js componentDidMount()");
  }

  state = {
    persons : [
      {name: 'Sameer', age: '27', id:111}, 
      {name: 'Sushant', age: '25', id:112},
      {name: 'Shayujya', age: '18', id:113},
    ], 
    revealPersons: true
  }

  switchNameHandler = (name) => {
    this.setState(
      {persons: [
        {name: 'Sameer', age: '27', id:111}, 
        {name: 'Sushant', age: '25', id:112},
        {name, age: '18', id: 113},
      ]}
    )
  }

  togglePersonHandler = () => {
    this.setState({revealPersons: !this.state.revealPersons})
  }

  nameChangeHandler = (event, index) => {
    let persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState({persons})
  }

  render() {
    console.log("App.js inside render");
    let persons = null;
    if(this.state.revealPersons) {
      persons = <Persons 
                  persons={this.state.persons}
                  switchNameHandler = {this.switchNameHandler}
                  nameChangeHandler = {this.nameChangeHandler}/>
    } 
     return (
         <div className="App">
           <Cockpit 
             title={this.props.title} 
             revealPersons={this.state.revealPersons}
             togglePersonHandler={this.togglePersonHandler}
           />
          {persons}
        </div>
    );
  }
}

export default App;
