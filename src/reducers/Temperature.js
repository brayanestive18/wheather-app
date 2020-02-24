import { SET_TEMPERATURE } from "../actions/WeatherTemperature";
import { SET_CITY } from "../actions/index";

const initialState = {
    city: "Medellín",
    count: 0
};

export const temperature = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEMPERATURE:
            return { ...state, count: state.count + 1 };
        case SET_CITY:
            return { ...state, city: action.payload };
        default:
            return state;
    }
};
