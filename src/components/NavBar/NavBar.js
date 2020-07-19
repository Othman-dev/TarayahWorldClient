import React, {useContext} from 'react';
import {PlanetsContext} from '../../context/PlanetsContext.js';

const NavBar = (props) => {

	const {navBarClass, menuClass, navBarToggle} = props

	const {planetsTab, dispatch} = useContext(PlanetsContext);

	const handleClick = (id) => {
		planetsTab.forEach((planet, index) => {
			if(planet.id === id){
				dispatch({type:'reset'});
				dispatch({type: 'switchInfoToggle', index:index});
			}
		})		
	}

	const navBar = (
	
		<div className={'navBar ' + navBarClass}>		
		
		<div className='socials' onClick={() => handleClick('socials')}>SOCIALS</div>
		<div className='news' onClick={() => handleClick('news')}>NEWS</div>
		<div className='about' onClick={() => handleClick('about')}>ABOUT</div>
		<div className='art' onClick={() => handleClick('art')}>ART</div>
		<div className='music' onClick={() => handleClick('music')}>MUSIC</div>
		<div className='contact' onClick={() => handleClick('contact')}>CONTACT PRO</div>
		
		</div>

	)

	const menu = (
		
		<div className='menu' onClick={navBarToggle}>
		<div className={'line1 ' + menuClass}/>
		<div className={'line2 ' + menuClass}/>
		<div className={'line3 ' + menuClass}/>
		</div>
	
	)

	return (
		<div>
		{navBar}
		{menu}
		</div>
	);
};
export default NavBar;
