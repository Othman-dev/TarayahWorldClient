import React, {createContext, useReducer} from 'react';
import PlanetsReducer from './PlanetsReducer.js'

export const PlanetsContext = createContext();

const PlanetsContextProvider = (props) => {

	const [planetsTab, dispatch] = useReducer(PlanetsReducer, [
                                {id:'news', planetToggle:false, infoToggle:false, classes:'planet1'},
                                {id:'art', planetToggle:false, infoToggle:false, classes:'planet2'},
                                {id:'about', planetToggle:false, infoToggle:false, classes:'planet3'},
                                {id:'contact', planetToggle:false, infoToggle:false, classes:'planet4'},
                                {id:'music', planetToggle:false, infoToggle:false, classes:'planet5'},
                                {id:'socials', planetToggle:false, infoToggle:false, classes:'planet6'}
        ]);
	return (
		<PlanetsContext.Provider value={{planetsTab, dispatch}}>
		{props.children}
		</PlanetsContext.Provider>
	);
};
export default PlanetsContextProvider
