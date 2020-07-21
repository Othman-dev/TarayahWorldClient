import React from 'react';
import classNames from 'classnames';

const SocialsInfo = (props) => {
		
		const dataLocal = props.dataLocal

		const social = props.social

        const infoClasses = (classNames(      
                 'socialsInfo',                                            
                 {'flex': social.hover}
         ))

		function infoBoxHandle() {
				
				if(social.id === 'Discord'){return dataLocal.infoDiscord}
				else if(social.id === 'Youtube'){return dataLocal.infoYoutube}
				else if(social.id === 'Instagram'){return dataLocal.infoInstagram}
				else if(social.id === 'Twitter'){return dataLocal.infoTwitter}
				else if(social.id === 'Twitch'){return dataLocal.infoTwitch}
				else if(social.id === 'Etsy'){return dataLocal.infoEtsy}
				else{return 'no info'}

		}

		const infoBox = infoBoxHandle()

		return (
				<div className={infoClasses}>
				{infoBox}
				</div>
		)
}

export default SocialsInfo
