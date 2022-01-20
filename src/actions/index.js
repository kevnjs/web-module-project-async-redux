import axios from "axios";

export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK"; //Add card to deck
export const SELECT_CARD = "SELECT_CARD"; //Selected Card is shown in card frame
export const HOVER_OVER_CARD = "HOVER_OVER_CARD"; //On hover the card will come into focus
export const ON_PAGE_LOAD = "ON_PAGE_LOAD";


export const addCardToDeck = (card) => {
    return ({type: ADD_CARD_TO_DECK, payload: card})
}

export const selectCard = (card) => {
    return ({type: SELECT_CARD, payload: card})
}

export const onPageLoad = () => {
    return (dispatch) => {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        .then(resp => 
            dispatch({type: ON_PAGE_LOAD, payload: resp.data.data[Math.floor(Math.random()*11731)]}))
        .catch(err => console.log(err))
    }
}

