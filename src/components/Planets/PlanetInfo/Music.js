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
						{Object.keys(dataLocal.songs).map((song, index) => (
						<li key={index}>{song}</li>
						))}
						</ul>

						<ul className='musicLink'>
						{Object.values(dataLocal.songs).map((link, index) => (
						<li key={index} classNames='songs'>
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
