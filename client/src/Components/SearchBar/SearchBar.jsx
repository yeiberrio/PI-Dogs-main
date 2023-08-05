import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../Redux/Actions/getDogs";
import Cards from "../Cards/Cards";



export default function SearchBar (props) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleChange = (event) =>  setName(event.target.value);
    

    const handleClick = () => {
        // event.preventDefault();
        dispatch(getDogs(name));
        setName("");
    }

    return(
        <div>
            <input value={name} onChange={handleChange} type='search' placeholder="Search by Name..."/>
            <button onClick={handleClick} >Search</button>
        </div>
        
    )
    
}