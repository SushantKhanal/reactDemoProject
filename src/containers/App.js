import React, { PureComponent } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('Inside app.js constructor:: ', props);
  }

  componentWillMount(){
    //discouraged
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
    //discouraged
      console.log("Update app.js, componentWillUpdate() method, nextProps:", nextProps, "; nextState:", nextState);
  }

  componentDidUpdate() {
      console.log("Update app.js, componentDidUpdate() method");   
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //new lifecycle hook
    //this lifecycle hook is executed whenever your props are updated 
    //and this gives you a chance of updating your state amongst with them
    console.log("Update app.js, getDerivedStateFromProps() method. nextProps: ", 
      nextProps, "; prevState: ", prevState);   
    return prevState;  
    //this gives us a chance of updating our state before render() happens
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    //new lifecycle hook
    //gets executed before component did update is done
    console.log("Update app.js, getSnapshotBeforeUpdate() method.");
    //great position for example to save current scrolling position of the user
    //for ex: you have a list of items, you add new list items, here you can save
    // the scrolling position before they are added, and you can set the user scrolling 
    //to that position after they have been added
    return null;
    //check official doc for more
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
    this.setState((prevState, props) => ({authenticated: !prevState.authenticated}));
  }

  render() {
    console.log("App.js inside render");
    let persons = null;
    if(this.state.revealPersons) {
      persons = <Persons 
                  persons={this.state.persons}
                  switchNameHandler = {this.switchNameHandler}
                  nameChangeHandler = {this.nameChangeHandler}
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
             authenticated={this.state.authenticated}
           />
           <AuthContext.Provider value={this.state.authenticated}>
             {persons}
           </AuthContext.Provider>
        </Aux>

        // </WithClass>
    );
  }
}

export default withClass(App, 'App');
