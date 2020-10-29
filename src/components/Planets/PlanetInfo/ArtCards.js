import React, {memo} from 'react';
import classNames from 'classnames';
import Painting1 from '../../../assets/pics/painting1.jpg';
import Painting2 from '../../../assets/pics/painting2.jpg';
import Painting3 from '../../../assets/pics/painting3.jpg';
import Painting4 from '../../../assets/pics/painting4.jpg';
import Painting5 from '../../../assets/pics/painting5.jpg';
import Painting6 from '../../../assets/pics/painting6.jpg';
import NewsImg from '../../../assets/pics/news.jpg';

const ArtCards = (props) => {

		const dataLocal = props.dataLocal

		const cardsNumber = props.cardsNumber

		const cardClasses = classNames({
				cards:true,
				cardText: cardsNumber === 0,
				cardGallery: cardsNumber ===1

		})

		function handleCardNumber() {
				if(cardsNumber === 0){
						return  <div>
										<div>{dataLocal.content}</div>
										<br/><br/>
										<img className='exemplePaint' src={NewsImg} alt='ExampleImg'/>
								</div>
				}
				else if(cardsNumber === 1){
						return	<div>
										<div className='gallery'>
										<img className='painting' src={Painting1} alt='painting here'/>
										</div>
										<div className='gallery'>
										<img className='painting' src={Painting2} alt='painting here'/>
										</div>
										<div className='gallery'>
										<img className='painting' src={Painting3} alt='painting here'/>
										</div>
										
										<div className='gallery'>
										<img className='painting' src={Painting4} alt='painting here'/>
										</div>
										<div className='gallery'>
										<img className='painting' src={Painting5} alt='painting here'/>
										</div>
										<div className='gallery'>
										<img className='painting' src={Painting6} alt='painting here'/>
										</div>
								</div>
				}
		}

		const cards = (
				handleCardNumber()
		)

		return (
				<div className={cardClasses}>
				{cards}
				</div>
		)
}

export default memo(ArtCards);
