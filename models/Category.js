module.exports = (sequelize, DataTypes)=>{

    const Category = sequelize.define("category", {
        categoryname:{
            type: DataTypes.STRING
        },
        categoryid:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        }
    })

    return Category
} 