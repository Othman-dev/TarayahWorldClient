import React, {useState} from 'react';
import firebase from '../../Firebase/firebase.js';

const SocialsUpdate = (props) => {

		const [dataLocal, setDataLocal] = useState(props.dataLocal.filter(data => data.category === 'Socials').pop())

		function handleChange(event) {
				setDataLocal({...dataLocal, [event.target.name]:event.target.value})
		}
		
		function handleSubmit(event) {
				alert('site updated')
				firebase.firestore().collection('planets').doc('D9eN3Jf1G59ezoWqcBCY').set(dataLocal)
				event.preventDefault()
		}

		const display = (                                       
				<div>
				<form>
						<label className='label'>Title :
						<input type='text' name='title' className='textInput' 
						defaultValue={dataLocal.title}
						onChange={handleChange}/>
						<input type='submit' value='Submit' onClick={handleSubmit}/>
						</label>
						<br/>

						<div className='divLabel'>
						<label className='label'>Discord :</label>
						<textarea rows='6' name='label infoDiscord'  
						defaultValue={dataLocal.infoDiscord} 
						onChange={handleChange}/>
						</div>

						<div className='divLabel'>
						<label className='label'>Youtube :</label>
						<textarea rows='6' name='infoYoutube'  
						defaultValue={dataLocal.infoYoutube} 
						onChange={handleChange}/>
						</div>

						<div className='divLabel'>
						<label className='label'>Twitter :</label>
						<textarea rows='6' name='infoTwitter'  
						defaultValue={dataLocal.infoTwitter} 
						onChange={handleChange}/>
						</div>
						
						<div className='divLabel'>
						<label className='label'>Twitch :</label>
						<textarea rows='6' name='infoTwitch'  
						defaultValue={dataLocal.infoTwitch} 
						onChange={handleChange}/>
						</div>

						<div className='divLabel'>
						<label className='label'>Instagram :</label>
						<textarea rows='6' name='infoInstagram'  
						defaultValue={dataLocal.infoInstagram} 
						onChange={handleChange}/>
						</div>
						
						<div className='divLabel'>
						<label className='label'>Etsy :</label>
						<textarea rows='6' name='infoEtsy'  
						defaultValue={dataLocal.infoEtsy} 
						onChange={handleChange}/>
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
export default SocialsUpdate;
