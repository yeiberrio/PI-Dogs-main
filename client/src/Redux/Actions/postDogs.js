import { ERROR, POST_DOG } from "../Types";
import axios from "axios"
const ENDPOINT = 'https://api.thedogapi.com/v1/breeds';

export const postDogs = (newDog) => {
    return async (dispatch) => {
        try {
             await axios.get(ENDPOINT + newDog)
            return dispatch({
                type: POST_DOG
               
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
             });
        }
        
    }

}