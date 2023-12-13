import { CHANGE_PAGE , ERROR} from "../Types";


export const changePage = (page) => {
    return async (dispatch) => {
        try {
    return dispatch({
        type: CHANGE_PAGE,
        payload:page
    })
} catch (error) {
    return dispatch({
        type: ERROR,
        payload: error.message
     });
}

    }}