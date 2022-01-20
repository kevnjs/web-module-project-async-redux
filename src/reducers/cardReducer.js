import { ADD_CARD_TO_DECK, SELECT_CARD, ON_PAGE_LOAD } from "../actions";
import axios from "axios";
import { useEffect } from "react";

const initialState = {
    card: {
        name: "Monster 1",
        level: 1,
        card_images: {
            image_url: "https://i.pinimg.com/originals/71/1d/14/711d146b5ddd8cf7ad2471f75a2bc56a.png",
        },
        id: 1230,
        type: "basic",
        desc: "description here",
        atk: 100,
        def: 100
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ON_PAGE_LOAD:
            return {
                card: action.payload
            }
        case SELECT_CARD:
            return {
                card: action.payload
            }
        default:
            return state;
        }
    }

export default reducer;