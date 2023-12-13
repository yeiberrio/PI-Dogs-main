// import axios from 'axios';
// import {ALLDOGS, ERROR, GET_DOGS}  from '../Types';
// const ENDPOINT = 'https://api.thedogapi.com/v1/breeds';

// export const getAllDogs = () => {
//     return async  (dispatch) => {
//     try {
        
        
//             const {data} = await axios.get(ENDPOINT);
        
//             return  dispatch({
//                 type: GET_DOGS,
//                 payload: data
//             })
        
//     } catch (error) {
//         return dispatch({
//             type: ERROR,
//             payload: error.message
//          });
//     }
// }
// ,}