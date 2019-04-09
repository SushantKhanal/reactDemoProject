import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('Inside Person.js constructor:: ', props);
        this.inputElement = React.createRef();
    }
    
    componentWillMount(){
        console.log("Inside Person.js componentWillMount()");
    }

    componentDidMount(){
        console.log("Inside Person.js componentDidMount()");
        // if(this.props.position === 0) 
        // this.inputElement.current.focus(); //inputElement is the wrapper component/element and current gives us access to the underlying dom element
    }

    focus(){
        this.inputElement.current.focus();
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
            <Aux>
                {this.props.authenticated ? <p>I'm authenticated bitcheees!</p> : null}
                <p className={classes.join(' ')}>I'm {this.props.name}. I'm {this.props.age} year old.</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type='text' 
                    onChange={this.props.changeName} 
                    value={this.props.name}
                />
            </Aux>
    )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.string,
    changeName: PropTypes.func,
}

export default withClass(Person, 'Person'); //for forward reference to work through the wrapper class
                                            //special changes in the wrapper class is necessary    
