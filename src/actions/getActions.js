import axios from "axios";

export const FETCH_GETS_SUCCESS = "FETCH_GETS_SUCCESS";
export const FETCH_GETS_ERROR = "FETCH_GETS_ERROR";
const URL = "http://ppc.onetvrn.com:3000/query/tsn/D6A020F8FE4366A";

export const fetchGets = () => dispatch => {
    axios
        .get(URL)
        .then(gets => {
            console.log('fetchGets');
            console.log(gets);
            dispatch({
                type: FETCH_GETS_SUCCESS,
                payload: gets
            })
        })
        .catch(e => {
            console.log("Error!!");
            console.log(e);
        });
};
