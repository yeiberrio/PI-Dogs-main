import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom';
import Cards from "../Cards/Cards";
import Card from '../Card/Card';
import styles from '../Home/Home.module.css'
import { getAllDogs } from '../../Redux/Actions/allDogs';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';
import { getDogs } from '../../Redux/Actions/getDogs';

export default function Home(props) {
    const dispatch = useDispatch();
    // const AllDogs = useSelector((state)=>state.allDogs)
    //despacha todos los dogs para que se rendericen en el home
    const handleClick = () => {
        dispatch(getDogs());
     };
    

    useEffect(()=>{
        dispatch(getDogs());
    }, [dispatch]);
  return (
    <div className={styles.container}>
      
      <Link to="/">
          <div >Landing</div>
        </Link>
      <button className={styles.homeButton} onClick={handleClick}>
        home
      </button>
      
      {/* <Link to={`/home`}>ver dogs      </Link> */}
      <h1>PERROS PERROS</h1>
      <div className={styles.card}>
      <SearchBar />
      <Filter/>
      <Cards />
    </div>
    </div>
    
  );
}