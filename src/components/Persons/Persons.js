import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('Inside Persons.js constructor:: ', props);
        this.lastPersonRef = React.createRef();
    }
    
    componentWillMount(){
        console.log("Inside Persons.js componentWillMount()");
    }

    componentWillUnmount(){
        console.log("Inside Persons.js componentWillUnMount()");
    }

    componentDidMount(){
        console.log("Inside Persons.js componentDidMount()");
        this.lastPersonRef.current.focus(); 
    }

    componentWillReceiveProps(nextProps) {
        console.log("Update Persons.js, componentWillRecieveProps, nextProps:", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Update Persons.js, shouldComponentUpdate() method, nextProps:", nextProps, "; nextState:", nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Update Persons.js, componentWillUpdate() method, nextProps:", nextProps, "; nextState:", nextState);
    }

    componentDidUpdate() {
        console.log("Update Persons.js, componentDidUpdate() method");  
    }

    render () {
        console.log("Persons.js inside render");
        return this.props.persons.map((person,index)=>(
                <Person 
                    position = {index}       
                    ref= {this.lastPersonRef}   //example of forward reference 
                                                //doesn't work without change in the wrapper class for the Person component   
                                                //since only one reference possible, the last person will get the reference
                    key={person.id} 
                    name={person.name} 
                    age={person.age} 
                    click={this.props.switchNameHandler}
                    authenticated={this.props.isAuthenticated}
                    changeName={(event)=>this.props.nameChangeHandler(event,index)}
                />
        ))}
}

export default Persons;