import React from 'react';
import Radium from 'radium';

const person = (props) => {
    let classes = []; 
    if(props.name.length <= 5) {
        classes.push('red');
    };
    if(props.name.length <= 3) {
        classes.push('bold');
    };
    const style = {
        '@media (min-width: 500px)': {
            width: '450px',
            backgroundColor: 'blue'
        }
    }
    return (
            <div style={style} className='Person'>
                <p className={classes.join(' ')}>I'm {props.name}. I'm {props.age} year old.</p>
                <p>{props.children}</p>
                <input type='text' onChange={props.changeName} value={props.name}/>
            </div>
    )
}

export default Radium(person);