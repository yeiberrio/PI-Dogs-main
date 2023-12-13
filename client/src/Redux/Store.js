import {createStore, applyMiddleware,     compose} from 'redux';
import  ThunkMiddleware  from "redux-thunk";
import reducer from './Reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__     || compose;// esta linea sirve 
//para conectar nuestra App con la extension REDUX DEVTOOLS DEL NAVEGADOR


const store =createStore(
    reducer, 
    composeEnhancer(applyMiddleware(ThunkMiddleware))//esta linea de codigo sirve para que podamos 
    //hacer peticiones a una Api/Servidor
);


export default store