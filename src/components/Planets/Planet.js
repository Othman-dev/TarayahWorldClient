import React, {useContext} from 'react';
import classNames from 'classnames';
import {PlanetsContext} from '../../context/PlanetsContext.js';

const Planet = (props) => {

	const {dispatch} = useContext(PlanetsContext);

	const planet = props.planet;

	const index = props.index;

	const planetClasses = (classNames(
		'planet', 
		planet.classes,
		{'planetZoom': planet.planetToggle},
		{'planetEnter' : planet.infoToggle}
	))

    const planetTextClasses = (classNames(
			'planetText',
			{'flex': planet.planetToggle && !planet.infoToggle}
    ))

	const planetElement = (
		<div className={planetClasses} onClick={() => dispatch({type: 'switchInfoToggle', index:index})}
				onMouseEnter={() => dispatch({type: 'switchPlanetToggle', index:index})}
				onMouseLeave={() => dispatch({type: 'switchPlanetToggle', index:index})}>
			<div className={planetTextClasses}>{planet.id}</div>
		</div>
	)

	return (
		<div>
			{planetElement}		
		</div>
	);
};
export default Planet
