import React from 'react';
import pomotom from './tomato.svg';



const refreshPage = () => { 
  window.location.reload(); 
}

const Pomo = () => (
	<div>
	  <div className="pomotomato">  Click on me to Stop <br/>
	    <img width="80px" height="80px" src={pomotom} alt="robot" onClick={ refreshPage } />
	  </div>
	</div>
)


export default Pomo;