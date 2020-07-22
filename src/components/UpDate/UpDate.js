import React, {useState, useEffect} from 'react';
import firebase from '../../Firebase/firebase.js';

//----------firebase extractor

function useData() {

		const [data, setData] = useState([])

		useEffect(() => {
				const unsuscribe = firebase.firestore().collection('planets')
				.onSnapshot((snapshot) => {
						const newData = snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data()
						}))
				setData(newData)
				})
				return () => unsuscribe()
		}, [])
		return data
}

//----------Update component, itself

const UpDate = () =>{

		const [selectUpdate, setSelectUpdate] = useState()

		const selection = handleSelection()

		const dataLocal = useData()

		function handleSelection() {
			return <div>{selectUpdate}</div>
		}

		const test = (
				<div>
				Bonjour Tarayah, ce site web a besoin de toi pour etre mis a jour!!!<br/>
				Tu n'as qu'a sélectionné une page à modifier.<br/>
				<select onChange={(e) => {setSelectUpdate(e.target.value)}}>
						<option></option>
						<option>News</option>
						<option disabled>----------</option>
						<option>Music</option>
						<option>Art</option>
						<option disabled>----------</option>
						<option>About</option>
						<option>Socials</option>
						<option>Contact</option>
				</select><br/>
				{selection}
				</div>
		)

		return (
		<div>
		{test}
		</div>

		)
}
export default UpDate; 
