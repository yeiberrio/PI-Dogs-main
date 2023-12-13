import { useEffect } from "react";
import { connect, useDispatch } from "react-redux"
import styles from './Detail.module.css'
import { getDogsById } from "../../Redux/Actions/getDogsById";
import { Link, useParams } from "react-router-dom";


function Detail (props) {
        const { id } = useParams();
    const dispatch = useDispatch();
               useEffect(() => {dispatch(getDogsById(id))}, [dispatch, id]);


    return(
        <div className={styles.card} >
        
        <button><Link to={`/home`}>
          <h4 >x</h4>
        </Link></button>
        <div><img className={styles.cardimage}  src={props.dogsDetail.image} alt='' /></div>
      <h2>{props.dogsDetail.id}</h2>
      <h3>NAME:{props.dogsDetail.breed}</h3>
      <h3>WEIGHT:{props.dogsDetail.weight}</h3>
      <h3>HEIGHT:{props.dogsDetail.height}</h3>
      <h3>LIFE SPAN:{props.dogsDetail.life_span}</h3>
      <h3>TEMPERAMENT:{props.dogsDetail.temperament}</h3>
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