import {GETDOGBYID, ORDER, FILTERBYORIGIN, GET_DOGS}  from './Types';

const initialState = {
DogsFullList:[],
allDogs: [],
temperament: [],
errors: false,
dogsDetail: {},
defaultOrderRef:[],
filterByOrigin: "All",
filterByTemperament: "All",
filteredByOrigin: [],
filteredByTemperament:[],
order:"Default",
currentPage: 1

}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        
        
            case GET_DOGS:
                return{
                    ...state,
                    DogsFullList: action.payload,
                    allDogs: action.payload,
                    errors: false,
                    defaultOrderRef:action.payload,
                    filterByOrigin: "All",
                    filterByTemperament: "All",
                    order: "Default",
                    currentPage: 1,
                    dogsDetail: {}




                }
                
                case GETDOGBYID:
                    return{
                        ...state,
                        dogsDetail: action.payload,
                        errors: false

                }
        
      
            case FILTERBYORIGIN:

            // declaro una constante en la cual guardo una copia del arreglo que contiene todos los perros para no modificarlos
            const allDogsFiltered = state.allDogs.filter(dog => dog.origin == action.payload )
                return{
                    ...state,
                    allDogs:
                     action.payload === "All"?[...state.allDogs]: allDogsFiltered
                    
                }
                case ORDER:

                    const allDogsCopy = [...state.allDogs]
                    return{
                        ...state,
                        allDogs: action.payload==="A"
                        ?allDogsCopy.sort((a, b) => a.id - b.id)
                        :allDogsCopy.sort((a, b) => b.id - a.id)
                    }
            
        
        
            
        default:
            return {...state}
    }
}
export default reducer;