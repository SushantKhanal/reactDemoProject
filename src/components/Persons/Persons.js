import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('Inside Persons.js constructor:: ', props);
    }
    
    componentWillMount(){
        console.log("Inside Persons.js componentWillMount()");
    }

    componentWillUnmount(){
        console.log("Inside Persons.js componentWillUnMount()");
    }

    componentDidMount(){
        console.log("Inside Persons.js componentDidMount()");
    }

    render () {
        console.log("Persons.js inside render");
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