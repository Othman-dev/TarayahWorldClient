import React from 'react';
import Youtube from '../../assets/pics/youtube.svg';
import Instagram from '../../assets/pics/instagram.svg';
import Twitter from '../../assets/pics/twitter.svg';
import Twitch from '../../assets/pics/twitch.png';
import Discord from '../../assets/pics/discord.png';
import Etsy from '../../assets/pics/etsy.png';
import TarayahWorld from '../../assets/pics/TarayahWorld.png';

const Header = () => {
	
	const logo = (

		<div className='header'>
			<img src={TarayahWorld} alt='TarayahWorld' className='tarayahWorldHeader'/>
		</div>
	)

	const socialsIcon = (

		<div className='headerIcon'>
		<a href='https://www.youtube.com/channel/UCsTBtbUxAVwsLF8devi7aUA?view_as=subscriber' target='_blank' rel="noopener noreferrer" className='socialsIcon'>
		<img src={Youtube} alt='youtube' className='socialsIcon'/>
		</a>

		<a href='https://www.instagram.com/tarayahworld/?hl=en'  target='_blank' rel="noopener noreferrer" className='socialsIcon'>
		<img src={Instagram} alt='instagram' className='socialsIcon'/>
		</a>

		<a href='https://twitter.com/TarayahWorld'  target='_blank' rel="noopener noreferrer" className='socialsIcon'>
		<img src={Twitter} alt='twitter' className='socialsIcon'/>
		</a>

		<a href='https://www.twitch.tv/tarayah'  target='_blank' rel="noopener noreferrer" className='socialsIcon'>
		<img src={Twitch} alt='twitch' className='socialsIcon'/>
		</a>
		
		<a href='https://discord.com/invite/WZMFE5W'  target='_blank' rel="noopener noreferrer" className='socialsIcon'>
		<img src={Discord} alt='discord' className='socialsIcon'/>
		</a>

		<a href='https://www.etsy.com/fr/shop/TarayahWorld'  target='_blank' rel="noopener noreferrer" className='socialsIcon'>
		<img src={Etsy} alt='etsy' className='socialsIcon'/>
		</a>
		</div>
	)

	return (
		
		<div>
		{socialsIcon}
		{logo}
		</div>

	);

};
export default Header;
