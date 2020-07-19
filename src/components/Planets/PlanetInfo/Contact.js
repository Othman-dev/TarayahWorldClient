import React from 'react';

const Contact = (props) => {

		const dataLocal = props.dataLocal

		const content = (dataLocal.title)

		return (
				<div>
						{content}
				</div>
		)
}
export default Contact;
