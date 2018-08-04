import React, { Component } from 'react';
import TimerDthree from './TimerDthree';
import TimerDisplay from './TimerDisplay';
import TimerButton from './TimerButton';
import TimerForm from './TimerForm';
import * as timerStates from './TimerState';
import moment from 'moment';
import './Timer.css';



class Timer extends Component {
	
	constructor() {
		super();

		this.state = {
			currentTime: moment.duration(25, 'minutes'),
			baseTime: moment.duration(25, 'minutes'),
			timerState: timerStates.NOT_SET,
			timer: null
		};

		this.setInitialTime = this.setInitialTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.countDownTheTime = this.countDownTheTime.bind(this);
	}


	setInitialTime(newBaseTime) {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime,
    });
  }

  startTimer() {
    this.setState({
      timerState: timerStates.RUNNING,
      timer: setInterval(this.countDownTheTime, 1000)
    });
  }

  stopTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.baseTime),
    });
  }

  countDownTheTime() {
    if (this.state.currentTime.get('hours') === 0
          && this.state.currentTime.get('minutes') === 0
          && this.state.currentTime.get('seconds') === 0) {
      this.completeTimer();
      return;
    }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, 'second');

    this.setState({
      currentTime: newTime,
    });
  }

  completeTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.COMPLETE,
      timer: null,
    });
  }



	render() {
		return(
			<div className="timerPage"> 
				<TimerDisplay 
				currentTime = {this.state.currentTime} 
				timerState={this.state.timerState} />

				<TimerButton 
				  startTimer = {this.startTimer} 
				  stopTimer = {this.stopTimer}
				  timerState={this.state.timerState}/>

				{
					(this.state.timerState !== timerStates.RUNNING)
					&&
						(<TimerForm 
					  baseTime={this.state.baseTime}
					  setInitialTime = {this.setInitialTime} />)
				}
				
			</div>
		)
	}
}





export default Timer;