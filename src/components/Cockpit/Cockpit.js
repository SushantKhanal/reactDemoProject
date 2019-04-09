import React from 'react';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid #333333',
        padding: '8 px',
        cursor: 'pointer',
      }
      if(props.revealPersons) {
        style.backgroundColor = 'red';
      } 
    return(
        <>
            <h1>{props.title}</h1>
            <h1>yuhuu</h1>
            <button 
                style={style}
                onClick={props.togglePersonHandler}>Switch Name</button>
            <button onClick={props.login}>logIn</button>    
        </> 
    )
}

export default cockpit;