import React from 'react';
import classNames from 'classnames';

const SocialsInfo = (props) => {

		const social = props.social

        const infoClasses = (classNames(      
                 'socialsInfo',                                            
                 {'flex': social.hover}
         ))


		const socialInfo = (

				<div className={infoClasses}>
				test
				</div>				

		)
console.log('update')
		return (
				<div>
				{socialInfo}
				</div>
		)
}

export default SocialsInfo
