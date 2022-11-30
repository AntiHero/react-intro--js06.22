import React, { useState } from 'react';

// Class Component
class Button extends React.Component {
  state = {
    counter: 0,
  };

  clickHandler() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <button
        style={{ height: '100px', width: '100px' }}
        onClick={() => this.clickHandler()}
      >
        {this.state.counter}
      </button>
    );
  }
}

// Functional Component
// const Button = () => {
//   const [counter, setCounter] = useState(0);

//   const clickHandler = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <button style={{ height: '100px', width: '100px' }} onClick={clickHandler}>
//       {counter}
//     </button>
//   );
// };

export default Button;
