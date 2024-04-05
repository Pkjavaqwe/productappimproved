
const dbConfig = require('../config/dbConfig.js')
const {Sequelize, DataTypes} = require ('sequelize');



const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,

    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,

        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('DB connection established')
})
.catch(err=> {
    console.log(console.error)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./Product.js')(sequelize, DataTypes)
db.categories = require('./Category.js')(sequelize, DataTypes)

db.sequelize.sync({force: false})
.then(()=>{
    console.log('yes re sync done!')
})
//adding foreign key constraints in order to achieve
db.categories.hasMany(db.products,{
  
    foreignKey:"categoryid",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'products'

})

db.products.belongsTo(db.categories,{
    foreignKey:'categoryid',
    as: "categories"
})

module.exports = db;
