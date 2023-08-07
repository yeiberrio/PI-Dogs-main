import {ERROR, GET_DOGS} from '../Types';
import axios from "axios";
const ENDPOINT = 'http://localhost:3001/dogs';


export const getDogs = (name) => {
    return async (dispatch) => {
try {
    if(name){
        
        const {data} = await axios.get(ENDPOINT + '?name=' + name)
        
        return dispatch({
            type: GET_DOGS,
            payload: data
        })
       

    }
    const {data} = await axios.get(ENDPOINT);
    return dispatch({
            type: GET_DOGS,
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