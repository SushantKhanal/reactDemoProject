import React, { PureComponent } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('Inside app.js constructor:: ', props);
  }

  componentWillMount(){
    console.log("Inside app.js componentWillMount()");
  }

  componentDidMount(){
    console.log("Inside app.js componentDidMount()");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log("Update app.js, shouldComponentUpdate() method, nextProps:", nextProps, "; nextState:", nextState);
  //     return true;
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log("Update app.js, componentWillUpdate() method, nextProps:", nextProps, "; nextState:", nextState);
  }

  componentDidUpdate() {
      console.log("Update app.js, componentDidUpdate() method");   
  }

  state = {
    persons : [
      {name: 'Sameer', age: '27', id:111}, 
      {name: 'Sushant', age: '25', id:112},
      {name: 'Shayujya', age: '18', id:113},
    ], 
    revealPersons: true,
    toggleClicked: 0,
    authenticated: false,
  }

  switchNameHandler = (name) => {
    this.setState(
      {persons: [
        {name: 'Sameer', age: '27', id:111}, 
        {name: 'Sushant', age: '25', id:112},
        {name, age: '18', id: 113},
      ]}
    )
  }

  togglePersonHandler = () => {
    this.setState((prevState, props)=>({
      revealPersons: !this.state.revealPersons,
      toggleClicked: prevState.toggleClicked + 1,       //this.state.toggleClicked + 1, is the improper way of doing it 
    }))                                                 // because this.setState is asynchronous
                                                        //because there might be a danger of editing the state at the same time
                                                        //in other parts of the application 
  }

  nameChangeHandler = (event, index) => {
    let persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState({persons})
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log("App.js inside render");
    let persons = null;
    if(this.state.revealPersons) {
      persons = <Persons 
                  persons={this.state.persons}
                  switchNameHandler = {this.switchNameHandler}
                  nameChangeHandler = {this.nameChangeHandler}
                  isAuthenticated = {this.state.authenticated}
                />
    } 
     return (
        //  <WithClass classes="App">
        <Aux>
           <Cockpit 
             title={this.props.title} 
             revealPersons={this.state.revealPersons}
             togglePersonHandler={this.togglePersonHandler}
             login={this.loginHandler}
           />
          {persons}
        </Aux>

        // </WithClass>
    );
  }
}

export default withClass(App, 'App');
