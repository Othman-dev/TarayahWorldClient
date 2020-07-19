import React, {useState} from 'react';
import '../assets/css/App.css';
import Intro from './Intro/Intro.js';
import Header from './Header/Header.js';
import PlanetsDisplay from './Planets/PlanetsDisplay.js';
import PlanetsContextProvider from '../context/PlanetsContext.js';
import NavBar from './NavBar/NavBar.js';


function Home() {
	
//----------Intro logic

	const [introScreen, setIntroScreen] = useState('intro')

	const [introEffect, setIntroEffect] = useState('main')

	function introTimeout() { 

                setIntroScreen('intro introDone')

                setTimeout(() => {setIntroScreen('intro none')
                                setIntroEffect('main mainFadeIn')
                }, 2000)
	
	};

//-----------NavBar logic
	
	const [menuToggle, setMenuToggle] = useState(false)

        const [navBarClass, setNavBarClass] = useState('')

        const [menuClass, setMenuClass] = useState('')

        function navBarToggle() {

                if(menuToggle === false) {

                        setMenuToggle(true);
                        setNavBarClass('opacityOff');
                        setMenuClass('menuX');
                }

                else {

                        setMenuToggle(false);
                        setNavBarClass('');
                        setMenuClass('');
                }
        };

	return (
		<div className='mainTheme'>

			<Intro introScreen={introScreen} introTimeout={introTimeout}/>
		
			<div className={introEffect}>
				<Header/>
				<PlanetsContextProvider>
					<PlanetsDisplay/>	
					<NavBar navBarClass={navBarClass} menuClass={menuClass} navBarToggle={navBarToggle}/>
				</PlanetsContextProvider>
			</div>
		</div>
  );
}

export default Home;
