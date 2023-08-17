const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el model
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('type', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    id:{
        type: DataTypes.UUID, // tipo de valor uuid
        defaultValue: DataTypes.UUIDV4, // genero el valor hexadecimal 
        allowNull: false,
        primaryKey:true
      }
        
    })}