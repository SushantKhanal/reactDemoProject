import React, { Component } from 'react';
import './App.css';
import Person from './Person'

class App extends Component {
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid #333333',
      padding: '8 px',
      cursor: 'pointer',
    }
    let persons = null;
    if(this.state.revealPersons) {
      style.backgroundColor = 'red';

      persons = this.state.persons.map((person,index)=>(
        <Person key={person.id} 
        name={person.name} age={person.age} 
        click={this.switchNameHandler}
        changeName={(event)=>this.nameChangeHandler(event,index)}/>
      ));
    } 
    return (
        <div className="App">
          <h1>Hi World, I'm not dead! And I will not be!</h1>
          <h1>yuhuu</h1>
          <button 
            style={style}
            onClick={this.togglePersonHandler}>Switch Name</button>
          {persons}
        </div>
    );
  }
}

export default App;
