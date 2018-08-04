import React, { Component } from 'react';
import moment from 'moment'



class TimerForm extends Component{

	constructor(){
		super();

    this.changTimeHandler = this.changTimeHandler.bind(this);
	}

	changTimeHandler(event) {
		const newBaseTime = this.props.baseTime;

    if (event.target.id === 'hours') newBaseTime.subtract(newBaseTime.get('hour'), 'hours').add(parseInt(event.target.value, 10), 'hours');
    if (event.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(event.target.value, 10), 'minutes');
    if (event.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(event.target.value, 10), 'seconds');

    this.props.setInitialTime(newBaseTime);

	}

	render(){
		return(
			<div>
				<br/><br/><br/>
				<label for="hours">Hour</label>
				<input
				className="timerLabel" 
				id ="hours" 
				type="number" 
				defaultValue={this.props.baseTime.get('hours')}
				onChange = {this.changTimeHandler}/>

				<label for="minutes">Min</label>
				<input
				className="timerLabel" 
				id ="minutes" 
				type="number" 
				defaultValue={this.props.baseTime.get('minutes')}
				onChange = {this.changTimeHandler}/>

				<label for="seconds">Sec</label>
				<input 
				className="timerLabel"
				id ="seconds" 
				type="number" 
				defaultValue={this.props.baseTime.get('seconds')}
				onChange = {this.changTimeHandler}/>  
	    </div>
		)
	}
}

export default TimerForm;






			  