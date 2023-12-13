import PropTypes from "prop-types";
import { changePage } from "../../Redux/Actions/changePage";
import { useSelector, useDispatch, connect } from 'react-redux';

const Paginado = ({dogsPerPage, allDogs, paginado}) => {
    
    const currentPage = useSelector((state)=>state.page)
    const current = useSelector((state)=>state.currentDogs)
    const dispatch = useDispatch();
   

    const pageNumber = []
    const cantPaginas = Math.ceil(allDogs/dogsPerPage)

    for(let i = 1; i <= cantPaginas; i++) {   //el Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
        //i <= 100/15 = 6.66 => Math.ceil(6.66) = 7 => 1 <= 7
        pageNumber.push(i)
    }
    

    const handleChangepage = (page) => {
        dispatch(changePage(page))
    };

    

    return (
        <nav>
            <div >

                {<button onClick={()=>handleChangepage(currentPage-1)}
                disabled={currentPage === 1}
                key={'prev'}>
                    {'PREV'}
                </button>                 }
             
                {pageNumber && pageNumber.map(number => ( //si en pageNumber hay algo mapealo
                    <span key={number}>
                        <button  onClick={() => paginado(number)}>{number}</button> {/* y por cada elemento renderizame un boton y agregales un evento onClick, el cual establecera el numero de pagina en el que me encuentro*/}
                    </span>
                ))}

                { /*<button onClick={()=>handleChangepage(currentPage+1)}
                disabled={currentPage===cantPaginas}
                key={'next'}>
                    {'NEXT'}
    </button>  */}

                

                {<button onClick={()=>handleChangepage(currentPage+1)} 
                disabled={currentPage === cantPaginas} key={'next'}>{'NEXT'}</button> }

            </div>
        </nav>
    )
}


const mapStateToProps = (state) => {
    return {
        changePage: state.page
      //    currentPage: state.currentPage
    }
  }
  
  Paginado.propTypes = {
    currentPage: PropTypes.number.isRequired,
    dogsPerPage: PropTypes.number.isRequired,
    currentDogs: PropTypes.array.isRequired,
    paginado: PropTypes.func.isRequired,
  };
  export default connect (mapStateToProps, null)(Paginado);

