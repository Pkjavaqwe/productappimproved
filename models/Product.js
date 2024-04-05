module.exports = (sequelize, DataTypes)=>{
    const Product= sequelize.define('product',{
        productname:{
            type:DataTypes.STRING
        },
        productid:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        categoryid:{
            type:DataTypes.INTEGER
        },
        categoryname:{
            type:DataTypes.STRING
        }

    })

    return Product
}