import React, {Component} from 'react';

class Composition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      composing: false,
    }
  }

  handleCompositionStart = () => {
    console.log('Композиція почалась');
    this.setState({composing: true});
  }

  handleCompositionUpdate = (event) => {
    console.log('Композиція оновлена');
    this.setState({value: event.target.value});
  }

  handleCompositionEnd = (event) => {
    console.log('Композиція закінчена');
    this.setState({composing: false, value: event.target.value});
  }

  handleChange = (event) => {
    if(this.state.composing) {
      return;
    }
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onCompositionStart={this.handleCompositionStart}
          onCompositionUpdate={this.handleCompositionUpdate}
          onCompositionEnd={this.handleCompositionEnd}
        />
      </div>
    );
  }
}

export default Composition;
