import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render () {
        return this.props.persons.map((person,index)=>(
                <Person 
                    key={person.id} 
                    name={person.name} 
                    age={person.age} 
                    click={this.props.switchNameHandler}
                    changeName={(event)=>this.props.nameChangeHandler(event,index)}
                />
        ))}
}

export default Persons;