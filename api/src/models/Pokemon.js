const { DataTypes, DATEONLY } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID, // tipo de valor uuid
      defaultValue: DataTypes.UUIDV4, // genero el valor hexadecimal 
      allowNull: false,
      primaryKey:true
    },
    image:{
      type: DataTypes.STRING,
      allowNull:false
    },
    hp:{
    type: DataTypes.STRING,
    allowNull:false
    },
    deffense:{
      type: DataTypes.STRING,
      allowNull: false
    },
    attack:{
      type: DataTypes.STRING,
      allowNull: false
    },
    
    speed:{
      type: DataTypes.STRING
    },
    height:{
      type: DataTypes.STRING
    },
    weight:{
      type: DataTypes.STRING
    }
  });
};
