import 
{ GETDOGBYID, CHANGE_PAGE, ORDER,
     FILTERBYORIGIN, GET_DOGS, 
     FILTER_TEMPERAMENT, 
     GET_TEMPERAMENT, POST_DOG}
      from './Types';

const initialState = {
    DogsFullList: [],
    allDogs: [],
    temperament: [],
    tempetamentCopy: [],
    postDog:{},
    errors: false,
    dogsDetail: {},
    origin: [],
    defaultOrderRef: [],
    filterByOrigin: "All",
    filterByOriginy: [],
    filterByTemperament: "All",
    filteredByOrigin: [],
    filteredByTemperament: [],
    order: "Default",

    page: 1,
   

}

const reducer = (state = initialState, action) => {
    switch (action.type) {


        case GET_DOGS: {
            
            return {
                ...state,

                
                DogsFullList: action.payload,
                allDogs: action.payload,
                filterByOriginy: action.payload,
                errors: false,
                defaultOrderRef: action.payload,

                origin: "DEFAULT",

                filterByOrigin: "All",
                filterByTemperament: "All",
                order: action.payload,
                currentPage: 1,
                dogsDetail: {},
                page:1
                





            }

        }
        case GETDOGBYID: {

            return {
                ...state,
                dogsDetail: action.payload,
                errors: false

            }

        }

        case FILTERBYORIGIN: {

            // declaro una constante en la cual guardo una copia del
            // arreglo que contiene todos los perros para no modificarlos y que cada que realice un filtro 
            //se restablezca al estado olriginal
            const allDogsCopy = [...state.DogsFullList];
            const DogsFullListCopy = [...state.DogsFullList];
            //aqui itero sobre cada una de las copias
            const allDogsFilter = allDogsCopy.filter(dog => dog.id <= "1000");
            const allDogsFiltered = DogsFullListCopy.filter(dog => dog.createDb === "true");

            if (action.payload === "DEFAULT") return {
                ...state, allDogs: [...state.defaultOrderRef],
                DogsFullList: [...state.defaultOrderRef], order: action.payload, filterByTemperament: "All"
            }
            if (action.payload === "All") return {
                ...state, allDogs: [...state.defaultOrderRef],
                DogsFullList: [...state.defaultOrderRef], order: action.payload, filterByTemperament: "All"
            }

            // if(action.payload == "DATABASE") return{...state,  allDogs:[...state.allDogs]}
            // if(action.payload == "APIS") return{...state,  DogsFullList:[...state.allDogsFiltered]}

            return {
                ...state,
                //aqui vamos a iterar sobre all dogs
                allDogs: action.payload === "API" ? allDogsFilter : allDogsFiltered


            }
        }

        case ORDER: {

            if (action.payload === "Default") return {
                ...state, allDogs: [...state.defaultOrderRef],
                DogsFullList: [...state.defaultOrderRef], order: action.payload, filterByTemperament: "All"
            }
            const sortFunction = (a, b) => {
                if (action.payload === "A-Z" || action.payload === "Z-A") {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return "A-Z" === action.payload ? 1 : -1;
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return "Z-A" === action.payload ? 1 : -1;
                } else {
                    if (a.id > b.id) return "A" === action.payload ? 1 : -1;
                    if (a.id < b.id) return "D" === action.payload ? 1 : -1;
                }
                return 0;
            }



            const allDogsCopy = [...state.allDogs];
            const DogsFullListCopy = [...state.DogsFullList];
            const newAllDogsCopy = allDogsCopy.sort((a, b) => sortFunction(a, b));
            const newDogsFullList = DogsFullListCopy.sort((a, b) => sortFunction(a, b))
            return {
                ...state,
                allDogs: newAllDogsCopy,
                DogsFullList: newDogsFullList,
                order: action.payload,
                
            }

        }
        case FILTER_TEMPERAMENT: {
            const temp = action.payload



            const allDogsFiltere = state.allDogs.filter(dog => dog.temperament && dog.temperament.includes(temp))
            if (action.payload === "DEFAULT") return {
                ...state, allDogs: [...state.defaultOrderRef],
                DogsFullList: [...state.defaultOrderRef], order: action.payload, filterByTemperament: "All"
            }
            if (action.payload === "All") return {
                ...state, allDogs: [...state.defaultOrderRef],
                DogsFullList: [...state.defaultOrderRef], order: action.payload, filterByTemperament: "All"
            }


            //const allDogsCopy = [...state.allDogs];
            //const DogsFullListCopy = [...state.DogsFullList];

            return {
                ...state,
                allDogs: temp ==="All"
                    ? [...state.DogsFullList] : allDogsFiltere,



            }
        }

        case GET_TEMPERAMENT: {
            
           
            return {
                ...state,
                temperament: action.payload

            }
        }
        case POST_DOG:{

            return{
                ...state,
                postDog: action.payload
            }
        }
        case CHANGE_PAGE:
            return{
                ...state,
                page:action.payload,
               
            };


        default:
            return { ...state }
    }
}
export default reducer;