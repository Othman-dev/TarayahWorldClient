import React, {useContext} from 'react';
import {PlanetsContext} from '../../context/PlanetsContext.js'; 
import Planet from './Planet.js';
import ResetBtn from './ResetBtn.js';
import PlanetInfo from './PlanetInfo.js';

const PlanetsDisplay = () => {

	const {planetsTab} = useContext(PlanetsContext);

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
			{planets}		
		</div>
	)
};
export default PlanetsDisplay
