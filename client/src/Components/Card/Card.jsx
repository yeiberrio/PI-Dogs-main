import React, { }  from 'react';
import styles from '../Card/Card.module.css'
import { Link } from 'react-router-dom';
const enpoindImage = "https://cdn2.thedogapi.com/images/"


export default function Card(props) {

  


  return (
    
      <div className={styles.card} >
        {/* <button onClick={handleFavorite }>{isFav? '❤️' : '🤍' }</button> */}
        
        <Link to={`/detail/${props.id}`}>
          <h2 >Detail</h2>
        </Link>
      
      {/* <h2>{id}</h2> */}
      <h3>{props.id}</h3>
      <h3>{props.name}</h3>
      <h4>{props.weight}</h4>
      <h4>{props.createDb}</h4>
      
      {/* <h4>{props.temperament}</h4> */}
      <img className={styles.cardimage}  src={props.image} alt='esta es una imagen de perro' />
      </div>
      
      
     
    
  );
}
