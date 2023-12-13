import { connect, useDispatch, useSelector } from "react-redux";
import { postDogs } from "../../Redux/Actions/postDogs"
import { getAllTemp } from "../../Redux/Actions/getTemperament";
//import { getAllTemperament } from "../../Redux/Actions/getTemperament";
import validate from "../validate";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const { useState } = require("react")

//la funcion para crear el perro
function CreateDog() {

  const [selectedTemperaments, setSelectedTemperaments] = useState([]);
  const [btnHabilitado, setBtnHabilitado] = useState(true)

  const dispatch = useDispatch();
  //declaro la funcion manejadora del ordnamiento de las cards

  useEffect(() => {
    dispatch(getAllTemp());
  }, [dispatch]);

// habilitar y deshabilitar boton


  const temperamento = useSelector((state) => state.temperament);
  const all = useSelector((state)=>state.allDogs)
  //useSelector((state) => state.temperament);
  //[{id: 1, name: "Yeison"}, {id: 2, name: "Ana"}]
  const navigate = useNavigate()

  //habilitar y deshabilitar el boton
  
  console.log(temperamento)
  //

  const [form, setForm] = useState({
    image: "",
    breed: "",
    weight: "",
    height: "",
    life_span: "",
    temperament: [],

  });
  const [errors, setErrors] = useState({
    image: "",
    breed: "",
    weight: "",
    height: "",
    life_span: "",
    temperament: [],
    
  });

  
  const handleSubmit = (event) => {
    event.preventDefault();

    const exist = all.find(dog=>dog.breed === form.breed)
   
    if(exist){
      alert("that Dog already exist")
    }else{
      dispatch(postDogs(form));
      
    setForm({
      image: "",
      breed: "",
      weight: "",
      height: "",
      life_span: "",
      temperament: [],

    })
    setSelectedTemperaments([]);
    
    alert("Created Dog");
    
   
    }
    navigate('/home')
  
  }
  const handleSelect = (event) => {
    const value = event.target.value;
   
    if (form.temperament.length >= 3) {
      //event.target.disabled = true;
      return alert("Cannot choose more than 3 temperaments");
      
    }
    
    if (!form.temperament.includes(value)) {
      setForm({
        ...form,
        temperament: [...form.temperament, value],
      });
    }
     if (event.target.value === form.temperament) {
      setSelectedTemperaments([...selectedTemperaments, value]);
      
    }
  };

  const handleOnchange = (event) => {
    const name = event.target.name
    const value = event.target.value
    
    // Actualizar el estado local solo si el evento proviene del elemento <select>
    if (name === "life_span" && value.length >= 3) {
      //event.target.disabled = true;
      alert("el campo debe ser menor a tres digitos")
    }
  
    setForm({
      ...form,
      [name]: value,

    });
    
    setErrors(validate({
            ...form,
            [name]: value,
        }))
        
      
  };

  

  

  // la funcion que hay a continuacion hace exactamente l mismo que el 
  //handleOnchange anterior pero con el codigo un poco mas resumido
  //const handleOnchange = (event) => {

  //setForm({
  //  ...form,
  //   [event.target.name]: event.target.value
  // })
  //}
  

  
  const handleDelete = (tempe) => {
    setForm({
      ...form,
      temperament: form.temperament.filter((t) => t !== tempe),
    });
  };

  const emptyErrors = Object.keys(errors).length===0
  return (

    <div>
      <div>
        <Link to="/home">
          <div >VAMOS AL HOME</div>
        </Link>
      </div>
      <h3>123</h3>
      <form onSubmit={handleSubmit}>
        <hr />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" autoComplete="inactive" onChange={handleOnchange} value={form.image} />
        <hr />{errors.image && <p >{errors.image}</p>}

        <div>
        <label htmlFor="breed">Breed</label>
        <input type="text" name="breed" autoComplete="inactive" onChange={handleOnchange} value={form.breed} />
        {errors.breed && <p >{errors.breed}</p>}
        </div>
        
        <hr />
        <label htmlFor="wheight">Weight</label>
        <input type="text" name="weight" autoComplete="inactive" onChange={handleOnchange} value={form.weight} />
        {errors.weight && <p >{errors.weight}</p>}
        <hr />
        <label htmlFor="height">Heigth</label>
        <input type="text" name="height" autoComplete="inactive" onChange={handleOnchange} value={form.height} />
        {errors.height && <p >{errors.height}</p>}
        <hr />
        <label htmlFor="life_span">Life Span</label>
        <input type="text" name="life_span" autoComplete="" onChange={handleOnchange} value={form.life_span} />
        {errors.life_span && <p >{errors.life_span}</p>}
        <hr />
        <div>
          <div>
            <h3>Select temperament</h3>
            <select
              name="temperamento" 
              onChange={handleSelect}  value={form.temperament}
            >
              {temperamento.map((temp) => (
                <option key={temp.id} value={temp.temperament} >

                  {temp.temperament} 
                </option>
                //<label htmlFor={temp.id} onChange={handleOnchange}>{temp.temperament}</label>

              ))}

            </select>
            
            <div className="box" //aqui renderizamos los temperamentos seleccionados
            >
              
              {form.temperament?.map((tempe) => (
                <span key={tempe}  //onChange={handleOnchange} 
                
                >{tempe}
                  <button
                    className="delete-btn"
                onClick={() => handleDelete(tempe) } 
                  >
                    x
                  </button></span>
              ))}

            </div>
            {errors.temperament && <p >{errors.temperament}</p>}
          </div>
        </div>
        <div>
          {emptyErrors && <button type="submit" >Enviar</button>}
        </div>
        
        
      </form>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    postDogs: state.postDog
    //    currentPage: state.currentPage
  }
}


export default connect(mapStateToProps, null)(CreateDog);