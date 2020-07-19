import React from 'react';
import Youtube from '../../../assets/pics/youtube.svg';

const Music = (props) => {

		const dataLocal = props.dataLocal

		const display = (
				<div>
						<div className='infoCategory'>
						{dataLocal.category}
						</div>

						<div className='infoTitle'>
						{dataLocal.title}
						</div>

						<ul className='musicList'>
						{dataLocal.songList.map((song, index) => (
						<li key={index}>{song}</li>
						))}
						</ul>

						<ul className='musicLink'>
						{dataLocal.songLink.map((link, index) => (
						<li key={index}>
						<a href={link} target='_blank' rel="noopener noreferrer" className='musicLinkIcon'>
						<img src={Youtube} alt='youtube' className='musicLinkIcon'/>
						</a>
						</li>
						))}
						</ul>

				</div>
		)

		return (
				<div>
						{display}
				</div>
		)
}
export default Music;
