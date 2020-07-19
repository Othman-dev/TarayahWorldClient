import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import firebase from '../../Firebase/firebase.js';
import News from './PlanetInfo/News.js';
import Art from './PlanetInfo/Art.js';
import Music from './PlanetInfo/Music.js';
import About from './PlanetInfo/About.js';
import Socials from './PlanetInfo/Socials.js';
import Contact from './PlanetInfo/Contact.js';
import '../../assets/css/planetInfo.css';

//----------firebase extractor

function useData() {

		const [data, setData] = useState([])

		useEffect(() => {
				const unsuscribe = firebase.firestore().collection('planets')
				.onSnapshot((snapshot) => {
						const newData = snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data()
						}))
				setData(newData)
				})
				return () => unsuscribe()
		}, [])
		return data
}

//----------ScreenPlanet component, itself

const PlanetInfo = (props) => {
	
    const planet = props.planet

    const dataLocal = useData().filter(data => data.category.toLowerCase() === planet.id).pop()

	const screenDivClasses = (classNames(
		'screen',
		{flex:planet.infoToggle},
		{screenOpacity:planet.infoToggle},
		{screenNoBG:planet.id === 'socials' ? true : false}
	))

		function onScreenHandle() {
				if(dataLocal === undefined) {return 'error loading the page'}
				else if(dataLocal.category === 'News') {return <News dataLocal={dataLocal}/>}
				else if(dataLocal.category === 'About') {return <About dataLocal={dataLocal}/>}
				else if(dataLocal.category === 'Art') {return <Art dataLocal={dataLocal}/>}
				else if(dataLocal.category === 'Music') {return <Music dataLocal={dataLocal}/>}
				else if(dataLocal.category === 'Contact') {return <Contact dataLocal={dataLocal}/>}
				else if(dataLocal.category === 'Socials') {return <Socials dataLocal={dataLocal}/>}
				else {return 'error loading page'}
		}

		const onScreen = onScreenHandle()


		return (
		<div className={screenDivClasses}>
				{onScreen}
		</div>
		)
}
export default PlanetInfo;
