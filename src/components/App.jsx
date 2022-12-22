import React from 'react';
import Cube from './Cube.jsx';
import Practice2Cube from './Practice2Cubelol.jsx';
import style from './App.module.css';
// import gradientLeft from '../pics/1.png';
// import gradientRight from '../pics/2.png';



class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      startTimer: false,
      modal: false,
      seconds: 0,
      minutes: 0,
      playSound: true,
      shuffleClicked: false,
      solveClicked: false
    }
    this.timer = this.timer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.sound = this.sound.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.solve = this.solve.bind(this);
  }

  // startAndStopTimer (event) {
  //   event.preventDefault();
  //   var timerInterval;
  //   if (this.state.startTimer === true) {
  //     timerInterval = setInterval(() => {
  //       if (this.state.seconds === 59) {
  //         this.setState({seconds: 0});
  //         this.setState({minutes: this.state.minutes + 1});
  //       }
  //       this.setState({
  //         seconds: this.state.seconds + 1
  //       })
  //     }, 1000);
  //   }
  //   if (this.state.startTimer === false) {
  //     clearInterval(timerInterval);
  //   }
  // }

  timer (event) {
    // event.preventDefault();
    this.setState({startTimer: true});
    this.setState({seconds:0});
    this.setState({minutes: 0});
    var interval = setInterval(() => {
      if (this.state.startTimer) {
        if (this.state.seconds === 59) {
          this.setState({seconds: 0});
          this.setState({minutes: this.state.minutes + 1});
        }
        this.setState({
          seconds: this.state.seconds + 1
        })
      }
      if (this.state.startTimer === false) {
        clearInterval(interval)
      }
    }, 1000);
  }

  stopTimer (event) {
    // event.preventDefault();
    console.log(this);
    this.setState({startTimer: false});
    this.setState({modal: true});
  }

  sound (event) {
    event.preventDefault();
    this.setState({playSound: (!this.state.playSound)});
  }

  shuffle (event) {
    event.preventDefault();
    this.setState({shuffleClicked: true});
    setTimeout(() => {
      this.setState({shuffleClicked: false})
      console.log(this.state.shuffleClicked);
    }, 1000);
  }

  solve (event) {
    event.preventDefault();
    this.setState({solveClicked: true});
    setTimeout(() => {
      this.setState({solveClicked: false})
    }, 1000);
  }


  render() {
    var timerButton;
    var modalPopUp;
    var soundButtonName;

    if (this.state.startTimer) {
      timerButton = <button className={style.startTimer} onClick={this.stopTimer} >STOP TIMER</button>;
    } else {
      timerButton = <button className={style.startTimer} onClick={this.timer} >START TIMER</button>;
    }

    if (this.state.modal) {
      modalPopUp = <div>
        Post your score to the leaderboard!
        {'Your score: ' + this.state.minutes + ':' + this.state.seconds}
        <form>
          Name:
          <input type="text" required value="true" ></input>
        </form>
        <button>POST</button>
        <button>CANCEL</button>
      </div>
    } else {
      modalPopUp = <div></div>
    }

    if (this.state.playSound) {
      soundButtonName = 'sound off';
    } else {
      soundButtonName = 'sound on';
    }

    return (
      <div className={style.app} >
        <div className={style.allButtons}>
          <button className={style.shuffle} onClick={this.shuffle}>SHUFFLE</button>
          <button className={style.solve} onClick={this.solve} >SOLVE</button>
          <button className={style.soundButton} onClick={this.sound}>{soundButtonName}</button>
          <div className={style.timeAndButtonContainer}>
            {this.state.minutes + ':' + this.state.seconds}
            {timerButton}
          </div>
        </div>
        {/* <Cube sound={this.state.playSound}/> */}
        <Practice2Cube shuffleClicked={this.state.shuffleClicked} solveClicked={this.state.solveClicked} sound={this.state.playSound} />
        {/* {modalPopUp} */}
      </div>
    )
  }
}

export default App;



