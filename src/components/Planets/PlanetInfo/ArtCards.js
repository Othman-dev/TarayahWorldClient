import React, {memo} from 'react';
import classNames from 'classnames';
import Painting1 from '../../../assets/pics/painting1.JPG';
import Painting2 from '../../../assets/pics/painting2.JPG';
import Painting3 from '../../../assets/pics/painting3.JPG';
import Painting4 from '../../../assets/pics/painting4.JPG';
import Painting5 from '../../../assets/pics/painting5.JPG';
import Painting6 from '../../../assets/pics/painting6.JPG';

const ArtCards = (props) => {

		const dataLocal = props.dataLocal

		const cardsNumber = props.cardsNumber

		const cardClasses = classNames({
				cards:true,
				cardText: cardsNumber === 0,
				cardGallery: cardsNumber ===1

		})

		function handleCardNumber() {
				if(cardsNumber === 0){return dataLocal.content}
				else if(cardsNumber === 1){
						return	<div>
										<div className='gallery'>
										<img className='painting' src={Painting1} alt='picture here'/>
										</div>
										<div className='gallery'>
										<img className='painting' src={Painting2} alt='picture here'/>
										</div>
										<div className='gallery'>
										<img className='painting' src={Painting3} alt='picture here'/>
										</div>
										
										<div className='gallery'>
										<img className='painting' src={Painting4} alt='picture here'/>
										</div>
										<div className='gallery'>
										<img className='painting' src={Painting5} alt='picture here'/>
										</div>
										<div className='gallery'>
										<img className='painting' src={Painting6} alt='picture here'/>
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
