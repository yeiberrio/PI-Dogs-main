import axios from "axios";
import { ERROR, GET_TEMPERAMENT, FILTER_TEMPERAMENT } from "../Types";
const ENDPOINT = 'http://localhost:3001/temperament';


export const getTemperament = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(ENDPOINT )
             return dispatch({
                type: FILTER_TEMPERAMENT, 
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

export const getAllTemp = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(ENDPOINT )
             return dispatch({
                type: GET_TEMPERAMENT, 
                payload: data,
             })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
             });
        }
    }
}
console.log(getAllTemp())

