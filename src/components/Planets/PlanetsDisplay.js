import React, {useContext} from 'react';
import {PlanetsContext} from '../../context/PlanetsContext.js'; 
import Planet from './Planet.js';
import ResetBtn from './ResetBtn.js';
import PlanetInfo from './PlanetInfo.js';
import StarsBg from '../../assets/pics/StarsBg.mp4';

const PlanetsDisplay = () => {

	const {planetsTab} = useContext(PlanetsContext);
     
	const stars = (                                              
         <div>                                                    
             <video autoPlay muted loop id="myVideo">             
                 <source src={StarsBg} type="video/mp4"/>         
             your browser does not support the background video         
             </video>                                                    
         </div>                                                         
     ) 
	
	const planets = (
	
		planetsTab.map((planet, index) => (
			<div  key={planet.id}>
			<Planet planet={planet} index={index}/>
			<ResetBtn planet={planet}/>
			<PlanetInfo planet={planet} index={index}/>
			</div>
			)
		)
	);
	return (
		<div>
			{stars}
			{planets}		
		</div>
	)
};
export default PlanetsDisplay
