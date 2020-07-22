import React, {useState} from 'react';
import firebase from '../../Firebase/firebase.js';

const AboutUpdate = (props) => {

		const [dataLocal, setDataLocal] = useState(props.dataLocal.filter(data => data.category === 'About').pop())

		function handleContentChange(event) {
				setDataLocal({...dataLocal, content:event.target.value})
		}

		function handleTitleChange(event) {
				setDataLocal({...dataLocal, title:event.target.value})
		}
		
		function handleSubmit(event) {
				alert('site updated')
				firebase.firestore().collection('planets').doc('3').set(dataLocal)
				event.preventDefault()
		}

		const display = (                                       
				<div>
						<div className='infoCategory'>
						{dataLocal.category}
						</div>                                          
				<form onSubmit={handleSubmit}>
						<div className='infoTitle'>                                              
						<label>Title :
						<input type='name' className='textForm' 
						value={dataLocal.title.toString()}
						onChange={handleTitleChange}/>
						</label>
						</div>

						<div className='aboutContent'>
						<label>Content :
						<textarea className='messageForm' 
						value={dataLocal.content.replace(/_n/g,"\n").toString()} 
						onChange={handleContentChange}/>
						</label>
						<button className='aboutSubmit' type='submit'>Submit</button>
						</div>
				</form>
				</div>                                                                                 )                
console.log(dataLocal)
		return (
		<div>
				{display}
		</div>
		)
}
export default AboutUpdate;
