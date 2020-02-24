import { FETCH_GETS_ERROR, FETCH_GETS_SUCCESS } from "../actions/getActions";

const initialState = {
    gets: [],
    isFetching: false
};

function gets(state = initialState, action) {
    switch (action.type) {
        case FETCH_GETS_SUCCESS:
            console.log("Action");
            console.log(state);
            console.log(action.payload.data);
            return {
                ...state,
                isFetching: true,
                gets: action.payload.data
            };
        case FETCH_GETS_ERROR:
            return "";
        default:
            return state;
    }
}

export default gets;
