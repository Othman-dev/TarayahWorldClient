import React, {useState} from 'react';
import firebase from '../../Firebase/firebase.js';

const NewsUpdate = (props) => {

		const [dataLocal, setDataLocal] = useState(props.dataLocal.filter(data => data.category === 'News').pop())

		function handleChange(event) {
				setDataLocal({...dataLocal, [event.target.name]:event.target.value})
		}
		
		function handleSubmit(event) {
				alert('site updated')
				firebase.firestore().collection('planets').doc('9owHLfMx8FNN1Hczuh7O').set(dataLocal)
				event.preventDefault()
		}

		const display = (                                       
				<div>
				<form>
						<label className='label'>Title :</label>
						<input type='text' name='title' className='textInput' 
						defaultValue={dataLocal.title}
						onChange={handleChange}/>
						<input type='submit' value='Submit' onClick={handleSubmit}/>
						<br/>
						<br/>
						<label className='label'>Youtube :</label>
						<input type='text' name='link' className='textInput'
						defaultValue={dataLocal.link}
						onChange={handleChange}/>
						<br/>
						<br/>
						<label className='label'>Content :</label>
						<textarea name='content' className='contentInput' 
						defaultValue={dataLocal.content} 
						onChange={handleChange}/>
				</form>
				</div>                                                                                 )                
	console.log(dataLocal)	
		return (
		<div>
				{display}
		</div>
		)
}
export default NewsUpdate;
