import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'



class App extends Component {
  render() {
  return (
    <div className="App">
      <h1>Hi, i am a react app </h1>
      <Person name="Poonam" age="27"/>
      <Person name="Sid" age="29"/>
    </div>
    );
 }
}

export default App;
