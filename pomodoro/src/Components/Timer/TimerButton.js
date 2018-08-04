import React, { Component } from 'react';
import * as timerStates from './TimerState'



class TimerButton extends Component {

	constructor(){
		super();
		this.getButton = this.getButton.bind(this);
	}

	getButton() {
		if (this.props.timerState === timerStates.NOT_SET)
      return (<button className="timerButton" onClick={this.props.startTimer}>Start</button>);

		if (this.props.timerState === timerStates.RUNNING)
      return (<button className="timerButton" onClick={this.props.stopTimer}>Stop</button>);

		if (this.props.timerState === timerStates.COMPLETE)
      return (<button className="timerButton"onClick={this.props.stopTimer}>Reset</button>);

	}


	render(){
		return (
			<div> 
			  {this.getButton()}
	    </div>
		)
	}
}
	

export default TimerButton;



