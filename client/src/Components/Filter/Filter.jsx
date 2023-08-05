import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card"
import { useState } from "react"

import { filterByOrigin,orderCards  } from "../../Redux/Actions/Filter"

const Filter = ({allDogs}) => {

//declaro la variable del dispatch
const dispatch = useDispatch();
//declaro la funcion manejadora del ordnamiento de las cards
const handleOrder = (event) => {
    dispatch (
        orderCards(event.target.value)
    )
   

}
//declaro la funcion manejadora del filtrado por origen
const handleFilterByOrigin = (event) => {
    dispatch(
        filterByOrigin(event.target.value)
    )
}
//return
    return(

        <div>

<select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>

    </select>
            <select onChange={handleFilterByOrigin} >
                <option value="All">All</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
            </select>
            {
                allDogs?.map((filt)=>{
                         return(
                 <Card
                      key={filt.id}
                      id = {filt.id}
                      name={filt.name}
                    //   species={fav.species}
                      
                      image={filt.image.url}
                      origin={filt.origin}
                    //   onClose={fav.onClose}    
                    
                    />
                    )
                })
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
       filterByOrigin: state.filterByOrigin,
       orderCards: state.order
    }
}

export default connect(mapStateToProps, null)(Filter);