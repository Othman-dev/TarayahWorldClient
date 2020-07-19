import React from 'react';

const Art = (props) => {

		const dataLocal = props.dataLocal

		const content = (dataLocal.title)

		return (
				<div>
						{content}
				</div>
		)
}
export default Art;
