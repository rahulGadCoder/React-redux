import { ADD_TO_CART, REMOVE_FROM_CART } from '../Constant';

const initialState = {
    cardData: []
}

export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                { cardData: action.data }
            ]
        case REMOVE_FROM_CART:
            return [
                ...state,
                { cardData: action.data }
            ]
            break;
        default:
            return state
    }
}