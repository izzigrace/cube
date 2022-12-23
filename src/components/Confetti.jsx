import React from 'react';
import './Confetti.css';

class Confetti extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render() {
    var confetti;
    if (this.props.solved) {
      confetti = <div>HIIIIIIIIIIIIIIIIIII</div>
    } else {
      confetti = <div></div>
    }
    return (
      <div className='confetti'>
        {confetti}
      </div>
    )
  }
}

export default Confetti;