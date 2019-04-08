import React, { Component } from 'react';

class Person extends Component {
    render() {
        let classes = []; 
        if(this.props.name.length <= 5) {
            classes.push('red');
        };
        if(this.props.name.length <= 3) {
            classes.push('bold');
        };
        return (
            <div className='Person'>
                <p className={classes.join(' ')}>I'm {this.props.name}. I'm {this.props.age} year old.</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changeName} value={this.props.name}/>
            </div>
    )
    }
}

export default Person;