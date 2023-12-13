import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom';
import Cards from "../Cards/Cards";
import Paginado from '../Pagination/Pagination';
import styles from '../Home/Home.module.css'

import { useDispatch, useSelector } from 'react-redux';
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';
import { getDogs } from '../../Redux/Actions/getDogs';
//import Form from '../Form/Form';
import { useState } from 'react';

export default function Home() {
    const dispatch = useDispatch();
    //pagination
    const dogs = useSelector((state) => state.page);
    const dogsSearch = useSelector((state) => state.allDogs);
    const displayDogs = dogsSearch.length > 0 ? dogsSearch : dogs;
    //pagination 
   console.log(displayDogs)
    const [currentPage, setCurrentPage] = useState(1) //lo seteo en 1 porque siempre arranco por la primer pagina
  const dogsPerPage = 10;//cantidad de perrs que debe haber por pagina
  const indexOfLastDogs = currentPage * dogsPerPage // 1 * 15 = 15
  const indexOfFirstDogs= indexOfLastDogs - dogsPerPage // 15 - 15 = 0
  //const current = displayVideogames.slice(indexOfFirst, indexOfLast) //para dividir la cantidad de perros por pagina
  const currentDogs = Array.isArray(displayDogs) ? displayDogs.slice(indexOfFirstDogs, indexOfLastDogs) : [];
console.log(currentDogs)
    //despacha todos los dogs para que se rendericen en el home
    //const handleClick = () => {     dispatch(getDogs());   };
    //paginado
    const paginado = (pageNumber) => { //establece el numero de pagina
      
      
      setCurrentPage(pageNumber)
  }

  

    useEffect(()=>{
        dispatch(getDogs());
    }, [dispatch]);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [currentPage])

    
  return (
    <div className={styles.container}>
      
      <Link to="/">
          <div >Landing</div>
        </Link>
        <Link to="/form">
          <div >form</div>
          
        </Link>
        <div >
         <Paginado 
         
         
         dogsPerPage={dogsPerPage} 
         allDogs={displayDogs.length} 
         paginado={paginado}
         />
         
       </div>
      
      <h1>PERROS PERROS</h1>
      <div className={styles.card}>
      <SearchBar />
      
      <Filter/>
      <Cards  currentDogs={currentDogs}/>
      
    </div>

    
    </div>
    
  );
}