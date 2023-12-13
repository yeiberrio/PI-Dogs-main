import { ERROR, POST_DOG } from "../Types";
import axios from "axios"
const ENDPOINT = 'http://localhost:3001/post';

export const postDogs = (newDog) => {
    return async (dispatch) => {
        try {
            console.log(newDog);
             const {data} = await axios.post(ENDPOINT, newDog)
            return dispatch({
                type: POST_DOG,
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