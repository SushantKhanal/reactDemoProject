import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person,index)=>(
    <Person 
        key={person.id} 
        name={person.name} 
        age={person.age} 
        click={props.switchNameHandler}
        changeName={(event)=>props.nameChangeHandler(event,index)}
    />
));

export default persons;