import { React } from 'react';
import Card from '../Card/Card';
import styles from '../Cards/Cards.module.css'
import {  connect } from 'react-redux';
const enpoin = "https://cdn2.thedogapi.com/images/"

 function Cards({id, name, image, origin, weight, currentDogs,createDb, allDogs}) {
   
    
    return (
        
       <div className={styles.container}>
            <div className={styles.Card} >
                              
          
                    {currentDogs.length > 0 &&
                          
                         currentDogs.map((dog) => {
                           
                            return(

                                <Card 
                                
                                
                                    key={dog.id}
                                    id={dog.id}
                                    image={dog.image}
                                    name={dog.breed}
                                    weight={dog.weight}
                                    
                                    
                                    origin={dog.origin}
                                    
                                   
                                />
                                                            )
                         }
                            
                            
                            
                            
                        )
                        }
               
            </div>
            </div>
    );
}


const mapStateToProps = (state) => {
    return {
       allDogs: state.allDogs,
    //    currentPage: state.currentPage
    }
}


export default connect(mapStateToProps)(Cards);