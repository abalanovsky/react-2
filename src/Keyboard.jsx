import React, {Component} from 'react';

class Keyboard extends Component {

  handleKeyDown = (event) => {
   if(event.keyCode === 13){
     console.log('Enter натиснуто')
     // handleSubmitForm();
   } else if(event.keyCode === 27) {
     console.log('Escape key pressed');
   }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  render() {
    return (
      <div>
        Натисни Enter або Escape щоб побачити вивід
      </div>
    );
  }
}

export default Keyboard;
