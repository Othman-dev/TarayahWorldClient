import React, {useState} from 'react';
import Axios from 'axios';

const Contact = (props) => {

		const dataLocal = props.dataLocal

		const [message, setMessage] = useState({
				name:'',
				email:'',
				subject:'',
				content:'',
				sent:null,
				disabled:false
		})

		function handleChange(event) {
				setMessage({...message, [event.target.name]:event.target.value})
		}

		function handleSubmit(event) {
				event.preventDefault()

				Axios.post('http://localhost:3030/api/email', message)
				.then(res => {
						if(res.data.success) {
								setMessage({...message,
								sent:true,
								disabled:true
								})
						}else{
								setMessage({...message,
								sent:false,
								disabled:false
								})
						}
				})
				.catch(err => {
								setMessage({...message,
								sent:false,
								disabled:false
								})
				})
		}

		const display = (
		    <div>
				<div className='infoCategory'>
				{dataLocal.category}
				</div>
				<div className='infoTitle'>
				{dataLocal.title}
				</div>
				<div className='email'>
				There are two ways to contact Tarayah,
				<br/>
				either the email adress bellow or 
				<br/>
				you can type your message here.
				<br/>
				<br/>
				<br/>
				email : stellaireperso@gmail.com
				</div>
		    </div>
		)

		const messageForm = (
				<div className='formDiv'>
						<form onSubmit={handleSubmit}>
						<input className='formInput' type='text' name='name' defaultValue='name' onChange={handleChange} required/>
						<br/>
						<input className='formInput' type='email' name='email' defaultValue='email@dress' onChange={handleChange} required/>
						<br/>
						<br/>
						<input className='formInput'type='text' name='subject' defaultValue='the subject of your message' onChange={handleChange} required/>
						<br/>
						<textarea rows='15' className='formMessage' name='content' defaultValue='you can type you message here' onChange={handleChange} required/>
						<br/>
						<br/>
						<button type='submit' disabled={message.disabled}>Submit</button>
						<div className={message.sent ? 'sentTrue' :'sentFalse'}>
						{message.sent === true && 'message sent'}
						{message.sent === false && 'message not sent'}
						</div>  
						</form>
				</div>
		)
		return (
				<div>
						{display}
						{messageForm}	
				</div>
		)
}
export default Contact;
