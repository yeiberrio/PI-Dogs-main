import { FILTERBYORIGIN, FILTER_TEMPERAMENT, ORDER} from "../Types"

export const filterByOrigin =(origin) => {
   return{
    type: FILTERBYORIGIN,
    payload: origin
   }

}

export const filterTemperament = (temperament) =>{
    return{
        type: FILTER_TEMPERAMENT,
        payload: temperament
    }
}

export const orderCards = (order) =>{
    return({
        type: ORDER,
        payload: order
    })
}