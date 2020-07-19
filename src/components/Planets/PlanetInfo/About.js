import React from 'react';

const About = (props) => {

		const dataLocal = props.dataLocal

		const display = (
		    <div>
				<div className='infoCategory'>
				{dataLocal.category}
				</div>
				<div className='infoTitle'>
				{dataLocal.title}
				</div>
				<div className='aboutContent'>
				{dataLocal.content.replace(/_n/g,"\n")}
				</div>
		    </div>
		)

		return (
				<div>
				{display}
				</div>
		)
}
export default About;
