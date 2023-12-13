const {Dogs} = require ('../db');
const getAllDogs = require     ('../Controlers/GetDogs');


const getDogById = async (id) => {
    const allDogs = await getAllDogs();
    const dog = await allDogs.find((dog) => dog.id == id);
     if(dog){
        return dog;
     }else{
        throw new Error("Dog Id no found");
}
     }   

     module.exports = getDogById;