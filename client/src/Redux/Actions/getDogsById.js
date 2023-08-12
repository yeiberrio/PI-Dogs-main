import axios from "axios";
import { GETDOGBYID, ERROR } from "../Types";
const ENDPOINT = 'http://localhost:3001/dogs/';

export const getDogsById = (id) => {
    
    return async (dispatch) => {
        try {
            const {data} = await axios.get(ENDPOINT + id);
            return dispatch ({
                type: GETDOGBYID,
                payload: data
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
             });
        }
    }
}