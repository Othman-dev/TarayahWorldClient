import React from 'react';
import IntroUniverse from '../../assets/pics/introUniverse.mp4';
import Tarayah from '../../assets/pics/Tarayah.png';
import World from '../../assets/pics/World.png';

const Intro = (props) => {

	const {introScreen, introTimeout} = props
	
	const title = (
		<div>
			<img src={Tarayah} alt='Tarayah' className='tarayahIntro'/>
			<img src={World} alt='World' className='worldIntro'/>
		</div>
	)

	const galaxy = (
	
		<div>
		    <video autoPlay muted loop id="myVideoIntro">
				<source src={IntroUniverse} type="video/mp4"/>
		Your browser does not support the intro video
		    </video>
		</div>

	);

	const enter = (
		
		<div>
		<button className='introButton' onClick={introTimeout}>
		<div className='introButtonEnter'>ENTER</div>
		prepare to explore

		</button>
		</div>
	
	);

	return(
	<div className={introScreen}>

		{title}
		{galaxy}
		{enter}

	</div>
	);
};

export default Intro;
