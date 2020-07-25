import React, {useState} from 'react';
import firebase from '../../Firebase/firebase.js';

const MusicUpdate = (props) => {

		const [dataLocal, setDataLocal] = useState(props.dataLocal.filter(data => data.category === 'Music').pop())
		
		const [songsTab, setSongsTab] =useState(dataLocal.songs)

		function handleChange(index, event) {
				if(index === null)
				{setDataLocal({...dataLocal, [event.target.name]:event.target.value})}
				else if (index !== null)
				{
						let temp = [...songsTab]
						temp[index] = {...temp[index], [event.target.name]:event.target.value}
						setSongsTab(temp)
				}
		}

		function handleAddButton(event) {
				setSongsTab([...songsTab, {songTitle:'', songLink:''}])
				event.preventDefault()
		}

		function handleDelete(index, event) {
				setSongsTab([...songsTab.slice(0, index), ...songsTab.slice(index+1)])
				event.preventDefault()
		}

		function handleSubmit(event) {
				alert('site updated')
				let dataTemp = dataLocal
				dataTemp.songs=songsTab
				firebase.firestore().collection('planets').doc('dUq196Ury6IzYhne4Fpb').set(dataTemp)
				event.preventDefault()
		}
		const display = (                                       
				<div>

				<form>
						<label className='label'>Title :</label>
						<input type='text' name='title' className='textInput' 
						defaultValue={dataLocal.title}
						onChange={(e) => handleChange(null, e)}/>
						<button className='submitButton' onClick={handleSubmit}>Submit</button>

						<br/>
						<button onClick={handleAddButton}>Add new song</button>
						
						<ul className='songList'>
						{songsTab.map((song, index) => (
						<label key={index} className='label'>Song :
						<input type='text' name='songTitle' className='textInput'
						defaultValue={song.songTitle}
						onChange={(e) => handleChange(index, e)}/>
						<button onClick={(e) => handleDelete(index, e)}>Delete</button>
						<br/>
						</label>
						))}
						</ul>

						<ul className='linkList'>
						{songsTab.map((song, index) => (
						<label key={index} className='label'>Link :
						<input type='text' name='songLink' className='textInput'
						defaultValue={song.songLink}
						onChange={(e) => handleChange(index, e)}/>
						<br/>
						</label>
						))}
						</ul>		

				</form>
				</div>                                                                                 )                
		return (
		<div>
				{display}
		</div>
		)
}
export default MusicUpdate;
