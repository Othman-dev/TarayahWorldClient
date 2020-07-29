import React, {useState} from 'react';
import ArtCards from './ArtCards.js';
import classNames from 'classnames';

const Art = (props) => {

		const dataLocal = props.dataLocal

		const [cardNumber, setCardNumber] = useState(1)

		const [transition, setTransition] = useState(true);

		const cardsClasses = classNames ({
				cardsContainer:true,
				cards1: cardNumber === 1,
				cards2: cardNumber === 2,
				cardsEnd: cardNumber === 3,
				transition: transition
		})

		function handlePrevious() {
				if(cardNumber === 1) {
						setCardNumber(0)
						setTimeout(() => {
								setTransition(false)
								setCardNumber(2)
						}, 502)
				}
				setTransition(true)
				setCardNumber(cardNumber - 1)
		}

		function handleNext() {
				if(cardNumber === 2) {
						setCardNumber(3)
						setTimeout(() => {
								setTransition(false)
								setCardNumber(1)
						}, 502)
				}
				setTransition(true)
				setCardNumber(cardNumber + 1)
		}

		const display = (
				<div>
						<div className='infoCategory'>
						{dataLocal.category}
						</div>

						<div className='infoTitle'>
						{dataLocal.title}
						</div>
								
						<button className='previous' onClick={handlePrevious}>{'<'}</button>
						<button className='next' onClick={handleNext}>{'>'}</button>
						<div className='carouselContainer'>
						<div className={cardsClasses}>
								<ArtCards dataLocal={dataLocal} cardsNumber={1}/>
								<ArtCards dataLocal={dataLocal} cardsNumber={0}/>
								<ArtCards dataLocal={dataLocal} cardsNumber={1}/>
								<ArtCards dataLocal={dataLocal} cardsNumber={0}/>
						</div>
						</div>

				</div>
		)

		return (
				<div>
						{display}
				</div>
		)
}
export default Art;
