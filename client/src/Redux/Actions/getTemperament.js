import axios from "axios";
import { ERROR, GET_TEMPERAMENT } from "../Types";
const ENDPOINT = 'https://api.thedogapi.com/v1/breeds/temperament';


export const getTemperament = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(ENDPOINT )
             return dispatch({
                type: GET_TEMPERAMENT,
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

