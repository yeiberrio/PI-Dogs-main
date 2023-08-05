import { SET_CURRENT_PAGE } from "../Types"
export const setCurrenPage = (pageNumbre) => {
    return{
        type: SET_CURRENT_PAGE,
        payload: pageNumbre
    }
}