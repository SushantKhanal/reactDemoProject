import React from 'react';

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
        <div>
        <h1>Hi World, I'm not dead! And I will not be!</h1>
        <h1>yuhuu</h1>
        <button 
            style={style}
            onClick={props.togglePersonHandler}>Switch Name</button>
    </div> 
    )
}

export default cockpit;