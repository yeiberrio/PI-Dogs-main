require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const morgan = require ('morgan');
const server = require('express');
const { Dog, Temperament } = require('../db');




// server.use(express.json());
// server.use(morgan('dev'));
const getApiInfo = async () => {
    const ApiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds`);
   
    const apiData = ApiUrl.data;//se accede a la propiedad data de apiurl
    const ApiInfo = await apiData.map((dog) => {
        return{
            id: dog.id,
            image: dog.image.url,
            breed: dog.name,  
            weight: dog.weight.metric,          
            height: dog.height.metric,            
            life_span: dog.life_span,
            temperament:dog.temperament,
            origin: dog.origin,
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
