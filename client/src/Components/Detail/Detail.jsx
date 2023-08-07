import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux"
import styles from './Detail.module.css'
import { getDogsById } from "../../Redux/Actions/getDogsById";
import { Link, useParams } from "react-router-dom";
import Cards from "../Cards/Cards";
import Card from "../Card/Card";

function Detail (props) {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getDogsById(id))}, [dispatch, id]);
//  console.log(allDogs)

    return(
        <div className={styles.card} >
        {/* <button onClick={handleFavorite }>{isFav? '❤️' : '🤍' }</button> */}
        <button><Link to={`/home`}>
          <h4 >x</h4>
        </Link></button>
        <div><img className={styles.cardimage}  src={props.dogsDetail.image} alt='' /></div>
      <h2>{props.dogsDetail.id}</h2>
      <h3>{props.dogsDetail.breed}</h3>
      <h4>{props.dogsDetail.weight}</h4>
      {/* <h4>{origin}</h4> */}
      
      </div>
    )
}
const mapStateToProps = (state) => {
    return{
        dogsDetail: state.dogsDetail
    }
}
export default connect(mapStateToProps, null)(Detail);