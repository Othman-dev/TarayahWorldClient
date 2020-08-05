import React from 'react';
import NewsImg from '../../../assets/pics/news.jpg';
import YouTube from 'react-youtube';

const News = (props) => {

		const dataLocal = props.dataLocal

		const youtubeId = (
				dataLocal.link.slice(dataLocal.link.indexOf('=')+1)
		)

		const display = (
		    <div>
				<div className='infoCategory'>
				{dataLocal.category}
				</div>
				<div className='infoTitle'>
				{dataLocal.title}
				</div>
				<div className='newsYoutube'>
				<YouTube videoId={youtubeId} className='youtubeVideo'/>
				</div>
				<div className='newsPaint'>
				<img className='newsImg' src={NewsImg} alt='New painting'/>
				</div>
				<p className='newsContent'>
				{dataLocal.content}
				</p>
		    </div>
		)

		return (
				<div>
				{display}
				</div>
		)
}
export default News;
