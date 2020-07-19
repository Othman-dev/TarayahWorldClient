import React from 'react';

const News = (props) => {

		const dataLocal = props.dataLocal

		const content = (dataLocal.title)

		return (
				<div>
						{content}
				</div>
		)
}
export default News;
