import React, {useState} from 'react';

const Contact = (props) => {

		const dataLocal = props.dataLocal

		const [message, setMessage] = useState({
				name:'',
				email:'',
				subject:'',
				message:''
		})

		function handleChange(event) {
				setMessage({...message, [event.target.name]:event.target.value})
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
						<form>
						<input className='formInput' type='text' name='name' defaultValue='name' onChange={handleChange}/>
						<br/>
						<input className='formInput' type='email' name='email' defaultValue='email adress' onChange={handleChange}/>
						<br/>
						<br/>
						<input className='formInput'type='text' name='subject' defaultValue='the subject of your message' onChange={handleChange}/>
						<br/>
						<textarea className='formMessage' name='message' defaultValue='you can type you message here' onChange={handleChange}/>
						<br/>
						<br/>
						<button>Submit</button>
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
