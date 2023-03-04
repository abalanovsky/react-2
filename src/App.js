import React, {Component} from 'react';
import './App.css';
import CopyButton from "./Events";
import Composition from './Composition';
import Keyboard from './Keyboard';
import Focus from './Focus';
import Form from './Form';


class App extends Component {
  render() {
    return (
      <div className="App">
        Synthetic Events
        <CopyButton text="Привіт, ми з України!" />
        <Composition />
        <Keyboard />
        <Focus />
        <Form />
      </div>
    );
  }
}

export default App;
