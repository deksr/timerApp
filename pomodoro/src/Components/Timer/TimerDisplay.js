import React, { Component } from 'react';
import * as timerStates from './TimerState';


const lp = (val) => {
  if (val < 10) return `0${val}`;
  return `${val}`;
}

const TimerDisplay = (props) => (
  <div>
    <div>
      {
        (props.timerState === timerStates.COMPLETE)
        && <iframe height="315" src="https://piviso.com/uploads/audio/2017-05-audio/kitchen-timer-20170512-03.mp3"></iframe>
      }
    </div>
    <div>
      <h2>
        {`${lp(props.currentTime.get('hours'))}:${lp(props.currentTime.get('minutes'))}:${lp(props.currentTime.get('seconds'))}`}
      </h2>
    </div>
  </div>
);


export default TimerDisplay;
