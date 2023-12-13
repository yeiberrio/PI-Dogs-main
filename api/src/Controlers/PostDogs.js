const {Dog, Temperament} = require ('../db');


// const postDog = async ({
//     image,
//     breed,
//     weight, 
//     height,
//     life_span,
//     temperament,

// }) => {
//     const dogExist = await Dog.findOne({where: {breed}});
//     if(dogExist){
//         throw new Error("Dog already exists");

//     }else{
//         const temperamentDb = await Temperament.findAll({
//             where: {temperament: temperament},
//         })

//         const temperamentMap = temperamentDb.map((temp) => temp.dataValues.temperament);

//         const temperamentJoin = temperamentMap.join(", ");
// console.log()
//         let createDog = await Dog.create({
//             image,
//             breed,
//             weight, 
//             height,
//             life_span,
//             temperament: temperamentJoin,
//         })
//         createDog.addTemperament(temperamentDb)
//     }
// }

const postDog = async ({
    image,
    breed,
    weight, 
    height,
    life_span,
    temperament,

}) => {
    const temperamentDb = await Temperament.findAll({
                    where: {temperament: temperament},
                     })
    let createDog = await Dog.create({
                    image,
                    breed,
                    weight, 
                    height,
                    life_span,
                    temperament: temperament,
                })
               
                createDog.addTemperament(temperamentDb)
                const dogExist = await Dog.findOne({where: {breed}, include: [{model: Temperament, attributes:["temperament"], 
                through:{attributes: []}}]});
                return dogExist;
            }


module.exports= postDog