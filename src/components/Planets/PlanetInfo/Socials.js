import React, {useState} from 'react';
import SocialsInfo from './SocialsInfo.js';

const Socials = (props) => {

		const dataLocal = props.dataLocal

		const [socialsTab, setSocialsTab] = useState([
		{id:'Discord', hover:false, link:'https://discord.com/invite/WZMFE5W'},
		{id:'Youtube', hover:false, link:'https://www.youtube.com/channel/UCsTBtbUxAVwsLF8devi7aUA?view_as=subscriber'},
		{id:'Instagram', hover:false, link:'https://www.instagram.com/tarayahworld/?hl=en'},
		{id:'Twitter', hover:false, link:'https://twitter.com/TarayahWorld'},
		{id:'Twitch', hover:false, link:'https://www.twitch.tv/tarayah'},
		{id:'Etsy', hover:false, link:'https://www.etsy.com/fr/shop/TarayahWorld'}
		])

		const handleHover = (index) => (
				setSocialsTab([
				...socialsTab.slice(0, index),
				{...socialsTab[index], hover: !socialsTab[index].hover},
				...socialsTab.slice(index + 1)
				])
		)

		const display = (
				<div>
				<div className='infoCategory'>
				{dataLocal.category}
				</div>
				<div className='infoTitle'>
				{dataLocal.title}
				</div>
				{socialsTab.map((social, index) => (
						<a key={social.id} href={social.link}  target='_blank' rel="noopener noreferrer">
						<div className={'socials' + social.id} 
						onMouseEnter={() => handleHover(index)}
						onMouseLeave={() => handleHover(index)}>			
						<div className='socialsDot'/>
						{social.id}
						<SocialsInfo social={social} dataLocal={dataLocal}/>
						</div>
						</a>
				))}
				</div>
		)


		return (
				<div>
						{display}
				</div>
		)
}
export default Socials;
