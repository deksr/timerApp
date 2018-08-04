import React, { Component } from 'react';
import Pomo from './Pomo';
import * as timerStates from './TimerState';






const lp = (val) => {
  if (val < 10) return `0${val}`;
  return `${val}`;
}

const TimerDisplay = (props) => (
  <div>
    <div>
      {props.timerState === timerStates.COMPLETE
        && (
          <React.Fragment>
          <iframe className="alarm"  src="http://www.gravomaster.com/alarm/sounds/ring1.wav"></iframe> 
        <Pomo />
        </React.Fragment>)}
    </div>

    <div className = "timerDisplay">
      <h2>
        {`${lp(props.currentTime.get('hours'))}:${lp(props.currentTime.get('minutes'))}:${lp(props.currentTime.get('seconds'))}`}
      </h2>
    </div>
  </div>
);


export default TimerDisplay;
