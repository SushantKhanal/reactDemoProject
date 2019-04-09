import React, { Component } from 'react';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('Inside Person.js constructor:: ', props);
    }
    
    componentWillMount(){
        console.log("Inside Person.js componentWillMount()");
    }

    componentDidMount(){
        console.log("Inside Person.js componentDidMount()");
    }

    render() {
        console.log("Inside Person.js inside render()")
        let classes = []; 
        if(this.props.name.length <= 5) {
            classes.push('red');
        };
        if(this.props.name.length <= 3) {
            classes.push('bold');
        };
        return (
            <WithClass classes='Person'>
                <p className={classes.join(' ')}>I'm {this.props.name}. I'm {this.props.age} year old.</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changeName} value={this.props.name}/>
            </WithClass>
    )
    }
}

export default Person;