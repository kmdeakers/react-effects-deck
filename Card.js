

/** Displays a single card.
 * 
 * Prop:
 *  -Card: 
		{
			"code": "2H",
			"image": "https://deckofcardsapi.com/static/img/2H.png",
			"images": {
				"svg": "https://deckofcardsapi.com/static/img/2H.svg",
				"png": "https://deckofcardsapi.com/static/img/2H.png"
			},
			"value": "2",
			"suit": "HEARTS"
		}
	

     -Deck --> Card 
 */

function Card ({card}) {

    return (
        <div className="Card">
            <image className="Card-image" 
            src={card.image} 
            alt={`${card.value} of ${card.suit}`}/>
        </div>
    );
}

export default Card;

