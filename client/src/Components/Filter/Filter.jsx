import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card"
import { useState } from "react"

import { filterByOrigin,filterTemperament,orderCards  } from "../../Redux/Actions/Filter"

const Filter = ({allDogs}) => {

//declaro la variable del dispatch
const dispatch = useDispatch();
//declaro la funcion manejadora del ordnamiento de las cards
const handleOrder = (event) => {
    dispatch (
        orderCards(event.target.value)
    )
   

}
const handleTemperament = (event) =>{
    dispatch(
        filterTemperament(event.target.value)
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
<option value="Default">Default</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>

    </select>
    <select onChange={handleOrder}>
        <option value="A">A-Z</option>
        <option value="D">Z-A</option>

    </select>
            <select onChange={handleFilterByOrigin} >
                <option value="DEFAULT"> Default</option>
                <option value="All">All</option>
                <option value="DATABASE">DATABASE</option>
                <option value="API">API</option>
            </select>
            <select onChange={handleTemperament}>
                <option value="Curious">Curious</option>
                <option value="Stubborn">Stubborn</option>
                
                <option value="Stubborn, Friendly, Affectionate, Loyal, Playful, Active">Playful</option>
                <option value="Adventurous">Adventurous</option>
                <option value="Active">Active</option>
                <option value="ActFun-lovingive">Fun-loving</option>
                <option value="Aloof">Aloof</option>
                <option value="Clownish">Clownish</option>
                <option value="Dignified">Dignified</option>
                <option value="Independent">Independent</option>
                <option value="Happy">Happy</option>
                <option value="Wild">Wild</option>
                <option value="Hardworking">Hardworking</option>
                <option value="Dutiful">Dutiful</option>
                <option value="Outgoing">Outgoing</option>
                <option value="Friendly">Friendly</option>
                <option value="Alert">Alert</option>
                <option  value="Confident">Confident</option>
            

            </select>
            
                      
       
            <div></div>
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