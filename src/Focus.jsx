import React, {Component} from 'react';

class Focus extends Component {

  handleFocus = () => {
    console.log('Input виділено');
  }

  handleBlur = () => {
    console.log('Input дефокусовано');
  }

  render() {
    return (
      <div>
        <label htmlFor="input">Введи тут щось: </label>
        <input type="text" id="input" onFocus={this.handleFocus} onBlur={this.handleBlur}/>
      </div>
    );
  }
}

export default Focus;
