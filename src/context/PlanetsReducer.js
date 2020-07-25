
	const PlanetReducer = (planetsTab, action) => {
                switch(action.type){
                        case 'switchPlanetToggle':
                                return [
                                ...planetsTab.slice(0, action.index),
                                {
                                ...planetsTab[action.index],
                                planetToggle: !planetsTab[action.index].planetToggle
                                },
                                ...planetsTab.slice(action.index + 1)
                                ];
                        case 'switchInfoToggle':
                                planetsTab.forEach(planet => planet.planetToggle=false)
                                planetsTab.filter((planet,index) => index !== action.index).forEach(planet => {
                                        if(planet.classes.indexOf(' none') === -1){planet.classes = planet.classes + ' none'}})
                                return [
                                ...planetsTab.slice(0, action.index),
                                {
                                ...planetsTab[action.index],
                                infoToggle: !planetsTab[action.index].infoToggle
                                },
                                ...planetsTab.slice(action.index + 1)
                                ];
                        case 'reset':
                                return [
                                {id:'news', planetToggle:false, infoToggle:false, classes:'planet1'},
                                {id:'art', planetToggle:false, infoToggle:false, classes:'planet2'},
                                {id:'about', planetToggle:false, infoToggle:false, classes:'planet3'},
                                {id:'contact', planetToggle:false, infoToggle:false, classes:'planet4'},
                                {id:'music', planetToggle:false, infoToggle:false, classes:'planet5'},
                                {id:'socials', planetToggle:false, infoToggle:false, classes:'planet6'}
        				];
                        default:
                                return planetsTab;
                }
}
export default PlanetReducer;
