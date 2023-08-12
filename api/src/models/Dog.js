const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    
id:{
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true
    },
image:{
      type: DataTypes.STRING,
      allowNull: false
    },


breed: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    
weight:{
      type: DataTypes.JSON,
      allowNull: true
    },

height:{
  type: DataTypes.JSON,
  allowNull: true
},


life_span:{
  type: DataTypes.STRING,
  allowNull: false,

}, 


// temperament:{
//   type: DataTypes.STRING,
//   allowNull: false
// }
  }, {timestamps:false});
};
