import { React } from 'react';
import Card from '../Card/Card';
import styles from '../Cards/Cards.module.css'
import {  connect } from 'react-redux';


 function Cards({id, name, image, origin, weight, allDogs}) {
   
    
    return (
       <div className={styles.container}>
            <div className={styles.Card} >
                               
          
                    {
                          
                         allDogs.map(dog => (
                            
                            
                                <Card 
                                
                                    key={dog.id}
                                    id={dog.id}
                                    image={dog.image}
                                    name={dog.breed}
                                    weight={dog.weight}
                                    origin={dog.origin}
                                    
                                   
                                />
                            
                        ))
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