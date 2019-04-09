import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

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
        if(this.props.position === 1) 
        this.inputElement.focus();
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
            // <WithClass classes='Person'>
            <Aux>
                <p className={classes.join(' ')}>I'm {this.props.name}. I'm {this.props.age} year old.</p>
                <p>{this.props.children}</p>
                <input 
                    ref={(inp)=>{ this.inputElement = inp }}
                    type='text' 
                    onChange={this.props.changeName} 
                    value={this.props.name}
                />
            </Aux>
            // </WithClass>
    )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.string,
    changeName: PropTypes.func,
}

export default withClass(Person, 'Person');