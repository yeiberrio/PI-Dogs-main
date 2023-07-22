const { Router } = require('express');
const server = require('express');
// Importar todos los routers;
const getAllDogs = require('../Controlers/GetDogs');
const getDogById = require('../Controlers/GetDogById');
const getApiInfo = require('../Controlers/GetDogs');
const Dog = require('../models/Dog');
const getAllTemperaments = require('../Controlers/GetAllTemperaments');
const postDog = require('../Controlers/PostDogs');


const router = Router();
// server.use(express.json());
// server.use(morgan('dev'));
// Configurar los routers


router.get('/dogs', 
async (req, res) => {   
    
    try {
        const breed = req.query.name;
        let allDogs = await getAllDogs();//me faltaba el AWAIT AQUI
       
        if(breed){
            let dogBreed= await allDogs.filter((dog) => dog.breed.toLowerCase().includes(breed.toLowerCase())
                     
            );
            console.log(dogBreed)  
            dogBreed.length
            ? res.status(200).json(dogBreed)
            
            :res.status(400).send("No matches for you search");
        }else{
            res.status(200).json(allDogs)
        }
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

router.get("/temperament", async(req, res) => {
try {
    let allTemperament = await getAllTemperaments();
    res.status(200).json(allTemperament)
} catch (error) {
    res.status(400).json({error: error.message})
}
    let allTemperament = getAllDogs();

})
router.get('/dogs/:id', async (req, res) => {
    const {id} = req.params;
    console.log(id)
    try {
        console.log(id)
        let dogById = await getDogById(id);
        
        res.status(200).json(dogById)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.post("/post", async (req, res) => {
    try {
         await postDog(req.body);
        res.status(200).send("Sucerfully added");
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
})


module.exports = router;
