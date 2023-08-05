import React, { useState }  from 'react';
import styles from '../Card/Card.module.css'
import { Link } from 'react-router-dom';


import {connect} from 'react-redux';
export default function Card({id, name, image, origin,  weight}) {

  // const [isFav, setIsFav] = useState(false);
  //  const handleFavorite= () =>{
  //     if (isFav){
  //        setIsFav(false);
  //       //  removeFav(id);
  //     }else{
  //        setIsFav(true);
  //        addFav({id, name, image, origin,  weight});
  //     }
  //  }


  return (
    
      <div className={styles.card} >
        {/* <button onClick={handleFavorite }>{isFav? '❤️' : '🤍' }</button> */}
        
      <h2>{id}</h2>
      <h3>{name}</h3>
      <h4>{weight}</h4>
      {/* <h4>{origin}</h4> */}
      <img className={styles.cardimage}  src={image} alt='' />
      </div>
      
     
    
  );
}
// const mapStateToProps = (state) => {
//   return{
//     allDogs: state.allDogs
//   }
// }

// const mapDispatchToProps = (dispatch)=> {
//   return{
//     filterByOrigin: (Dog) => {dispatch(filterByOrigin(Dog))}
//   }
// }
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Card);