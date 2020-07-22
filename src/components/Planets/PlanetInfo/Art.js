import React from 'react';

const Art = (props) => {

		const dataLocal = props.dataLocal

		const display = (
				<div>
						<div className='infoCategory'>
						{dataLocal.category}
						</div>

						<div className='infoTitle'>
						{dataLocal.title}
						</div>


				</div>
		)

		return (
				<div>
						{display}
				</div>
		)
}
export default Art;
