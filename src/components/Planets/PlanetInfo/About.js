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
				<p className='aboutContent'>
				{dataLocal.content.replace(/_n/g,"\n")}
				</p>
		    </div>
		)

		return (
				<div>
				{display}
				</div>
		)
}
export default About;
