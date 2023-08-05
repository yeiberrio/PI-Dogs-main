import { FILTERBYORIGIN, ORDER} from "../Types"

export const filterByOrigin =(origin) => {
   return{
    type: FILTERBYORIGIN,
    payload: origin
   }

}

export const orderCards = (order) =>{
    return({
        type: ORDER,
        payload: order
    })
}