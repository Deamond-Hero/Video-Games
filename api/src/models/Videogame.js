const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    ID:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    relaseDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER , 
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdToBD: {
      type: DataTypes.BOOLEAN ,
      allowNull: false,
      defaultValue: true
    },  
  },
  {timestamps: false}
  )

}
