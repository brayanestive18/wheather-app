import { createStore, applyMiddleware, combineReducers/*, compose*/ } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { temperature } from "../reducers/Temperature";
import gets from "../reducers/getReducer";

/* const initialState = {
    city: "Medellín",
    count: 0
}; */

const myReducers = combineReducers({
    temperature,
    gets
});

// Midleware
/* const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log('Change state!!', action)
        }
    }
} */

/* const logger = store => next => action => {
    console.log("Change state!!", action);
    next(action)
}; */

const middlewareTwo = store => next => action => {
    console.log("Middleware Two!!");
    next(action);
};

/* const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION__ ||
    compose; */

// El Store se crea pasando un reduce
const store = createStore(
    //temperature,
    // initialState,
    myReducers,
    applyMiddleware(logger, thunk, middlewareTwo)
    // composeEnhancers(applyMiddleware(logger, thunk, middlewareTwo))
    //,    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
