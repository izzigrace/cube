import React from 'react';
// import { Canvas } from '@react-three-fiber';
import Cube from './Cube.jsx';
import style from './App.module.css';
import gradientLeft from '../pics/1.png';
import gradientRight from '../pics/2.png';



class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={style.app} >
        <div className={style.allButtons}>
          <button className={style.shuffle}>SHUFFLE</button>
          <button className={style.solve}>SOLVE</button>
          <button className={style.startTimer}>START TIMER</button>
        </div>
        <Cube />
        <div>
          <img src={gradientLeft} className={style.gradientLeftPic} alt="gradient background"></img>
          <img src={gradientRight} className={style.gradientRightPic} alt="gradient background"></img>
        </div>
      </div>
    )
  }
}

export default App;
