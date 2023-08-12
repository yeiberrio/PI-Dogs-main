import axios from "axios";
import { ERROR, GET_TEMPERAMENT, FILTER_TEMPERAMENT } from "../Types";
const ENDPOINT = 'https://api.thedogapi.com/v1/breeds/temperament';


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

