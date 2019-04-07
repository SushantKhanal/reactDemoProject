import React from 'react';

const person = (props) => {
    let classes = []; 
    if(props.name.length <= 5) {
        classes.push('red');
    };
    if(props.name.length <= 3) {
        classes.push('bold');
    };
    const rnd = Math.random();
    if(rnd > 0.7){
        throw new Error("Something Went Wrong")
    }
    
    return (
            <div className='Person'>
                <p className={classes.join(' ')}>I'm {props.name}. I'm {props.age} year old.</p>
                <p>{props.children}</p>
                <input type='text' onChange={props.changeName} value={props.name}/>
            </div>
    )
}

export default person;