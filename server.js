const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const express = require('express');
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const db = require('./config/dbConfig')


app.get('/', function(req,res){
    res.send("hello World");
})

app.use('/api/product',productRoutes)
app.use('/api/category',categoryRoutes)
app.listen(7001,()=>{
    console.log("server is up and running on port 7001")
})
