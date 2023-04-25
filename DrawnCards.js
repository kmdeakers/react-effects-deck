import Card from './Card';
/** 
 * Returns played cards
 * 
 * Props
 *  -cards:
 * [
		{
			"code": "2H",
			"image": "https://deckofcardsapi.com/static/img/2H.png",
			"images": {
				"svg": "https://deckofcardsapi.com/static/img/2H.svg",
				"png": "https://deckofcardsapi.com/static/img/2H.png"
			},
			"value": "2",
			"suit": "HEARTS"
		}, ....
    ]

 * DrawCardGame --> DrawnCards --> Card
 */ 

function DrawnCards({cards}) {

	return (
		<div className="DrawnCards">
			{cards.map(c => <Card card={c} key={c.code}/>)}
		</div>
	);
}

export default DrawnCards;