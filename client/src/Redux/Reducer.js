import {GETDOGBYID, ORDER, FILTERBYORIGIN, GET_DOGS, FILTER_TEMPERAMENT}  from './Types';

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
        
        
            case GET_DOGS:{

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
                
            }
                case GETDOGBYID:{

                    return{
                        ...state,
                        dogsDetail: action.payload,
                        errors: false

                }
        
                }
      
            case FILTERBYORIGIN:

            // declaro una constante en la cual guardo una copia del arreglo que contiene todos los perros para no modificarlos
            const allDogsFiltered = state.allDogs.filter(dog => dog.origin == action.payload )
                return{
                    ...state,
                    allDogs:
                     action.payload === "All"?[...state.allDogs]: allDogsFiltered
                    
                }
                case ORDER:{

                     if( action.payload==="Default")  return{...state, allDogs:[...state.defaultOrderRef],
                         DogsFullList: [...state.defaultOrderRef], order: action.payload,  filterByTemperament: "All" }
                    const sortFunction = (a, b) => {
                        if(action.payload === "A-Z" || action.payload === "Z-A" ){
                           if (a.name.toLowerCase() > b.name.toLowerCase()) return "A-Z" === action.payload ? 1 : -1;
                           if (a.name.toLowerCase() < b.name.toLowerCase()) return "Z-A" === action.payload ? 1 : -1;
                        }else{
                            if(a.id > b.id) return "A" === action.payload ? 1 : -1;
                            if(a.id < b.id) return "D" === action.payload ? 1 : -1;
                        }
                        return 0;
                        }
                        const allDogsCopy = [...state.allDogs];
                        const DogsFullListCopy = [...state.DogsFullList];
                        const newAllDogsCopy = allDogsCopy.sort((a, b) => sortFunction(a,b));
                        const newDogsFullList = DogsFullListCopy.sort((a, b) => sortFunction(a,b))
                        return{
                            ...state,
                            allDogs : newAllDogsCopy,
                            DogsFullList: newDogsFullList,
                            order: action.payload,
                            currentPage: 1,
                        }

                    }
                    case FILTER_TEMPERAMENT:{
                        const allDogsFiltere = state.allDogs.filter(dog => dog.temperament == action.payload )
                        // const allDogsFiltered = allDogsFiltere.split(',')
                        return{
                            ...state,
                            filterByTemperament: action.payload == "playful" 
                            ? [...state.allDogs]:allDogsFiltere

                        }
                    }
                        
                    
                           
                            

                             
                  
                    
            
        
        
            
        default:
            return {...state}
    }
}
export default reducer;