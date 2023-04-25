import {useState, useEffect} from 'react';
import DrawnCards from './DrawnCards';

const FETCH_DECK_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
const DECK_API_BASE_URL = "https://deckofcardsapi.com/api/deck";


/// ym8lk19skqz0/draw/?count=1
/**
 * App to play Draw Card Game
 * 
 * State:
 *  deck :
 *     {
	"success": true,
	"deck_id": "q4em9aagajor",
	"remaining": 52,
	"shuffled": true
} 

    drawnCards: [
        	{
			"code": "2H",
			"image": "https://deckofcardsapi.com/static/img/2H.png",
			"images": {
				"svg": "https://deckofcardsapi.com/static/img/2H.svg",
				"png": "https://deckofcardsapi.com/static/img/2H.png"
			},
			"value": "2",
			"suit": "HEARTS"
		},
        ...
    ]
 */

function DrawCardApp () {
    const [deck, setDeck] = useState(null);
    const [drawnCards, setDrawnCards] = useState(null);

    useEffect(function fetchDeckWhenMounted(){
        async function fetchDeck() {
            const deckResult = await axios.get(`${DECK_API_BASE_URL}/new/shuffle/?deck_count=1`);
            setDeck(deckResult.data)
            }
        fetchDeck();
    }, [ ]);

    async function drawCard () {
        const cardResult = await axios.get(`${DECK_API_BASE_URL}/${deck.deck_id}/draw/`)
        // if (cardResult.data.remaining === 0) {
        //     return
        // }
    }


    return (
        <div className='DrawCardApp'>
            <button className='DrawCardApp-button' onClick={drawCard}>Draw Card</button>
            <DrawnCards drawnCards={drawnCards}/>
        </div>
    )
}

export default DrawCardApp