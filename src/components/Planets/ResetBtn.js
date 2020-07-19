import React, {useContext} from 'react';
import classNames from 'classnames';
import {PlanetsContext} from '../../context/PlanetsContext.js';

const ResetBtn = (props) => {

	const {dispatch} = useContext(PlanetsContext);

	const planet = props.planet

	const resetClasses = classNames(
		'resetBtn',
		{'flex': planet.infoToggle}
	)

	const resetBtn = (
		<div className={resetClasses} onClick={() => dispatch({type: 'reset'})}>
		Leave the atmosphere !
		</div>
	)

	return (
		<div>
			{resetBtn}
		</div>
	)
}
export default ResetBtn;
