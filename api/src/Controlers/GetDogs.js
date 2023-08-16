require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const morgan = require ('morgan');
const server = require('express');
const { Dog, Temperament } = require('../db');

const enpoin = "https://cdn2.thedogapi.com/images/";
// const image = "BJa4kxc4X"; 


// server.use(express.json());
// server.use(morgan('dev'));
const getApiInfo = async () => {
    const config = {
        headers: {
          'x-api-key': API_KEY,
        },
      };
    const ApiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds`, config);
   
    const apiData = ApiUrl.data;//se accede a la propiedad data de apiurl

    
    
    const ApiInfo = await apiData.map((dog) => {
        const imageUrl = enpoin+dog.reference_image_id.replace(/"/g, "")+".jpg"
        return{
            
            id: dog.id,
            image: imageUrl,
            breed: dog.name,  
            weight: dog.weight.metric,          
            height: dog.height.metric,            
            life_span: dog.life_span,
            temperament:dog.temperament,
            // origin: dog.origin
        }
    })
    // return res.status(200).json(ApiInfo) 
    return ApiInfo;
}

const getDbInfo = async () => {
   return await Dog.findAll({
    
    include:{
        model: Temperament,
        attributes:   [ "temperament"],
        through:{
            attributes: [],
        }
    }
   } 

   )
}
// getDbInfo()

const getAllDogs = async () =>{
   
    const apiInfo = await getApiInfo();
    // console.log("aqui estoy")
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
   
    return infoTotal;
    

}

module.exports =  getAllDogs;
