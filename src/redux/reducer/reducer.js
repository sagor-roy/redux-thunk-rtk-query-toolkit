import { ADD, REMOVE } from "./actionTypes";

const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD:
            return [
                ...state,
                payload
            ];
        case REMOVE:
            return state.filter((item, index) => index !== payload, -1)
        default:
            return state;
    }
}

export default reducer;