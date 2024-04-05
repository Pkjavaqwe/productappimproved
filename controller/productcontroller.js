const db = require('../models')


const Product = db.products

/*const getAllProduct = async(req,res) => {
    const data = await Product.findAll({
        include: [{
            model: Product,
            as:'products'
        }],
        where: {id:2}
    })
}*/

const getAllProducts = (req,res)=>{

  
    const page = parseInt(req.query.page) || 1;
    // const categoryid = req.query.categoryid 
    const limit = 3
    const offset = (page - 1) * limit;

    Product.findAll({
      limit: limit,
      offset: offset
    }).then((result)=>{
       res.status(200).json({
        show:result
       })
    }).catch(error=>{
        console.error(error)
    })
     
 }

 const getProductByID = (req,res)=>{
 
    const productid = req.params.productid
    Product.findByPk(productid).then((result)=>{
        res.status(200).json({
            message: `data with productid ${productid} is fetch successfully`,
            post: result
        })       
    }).catch(error=>{
        res.status().json({
            message:"something went wrong",
            error:error
        })
    })
}


const createProduct = (req,res)=>{
    const requestBody = {
        productid: req.body.productid,
        productname: req.body.productname,
        categoryname: req.body.categoryname,
        categoryid: req.body.categoryid
    }
    Product.create(requestBody)
    .then((result)=>{
        res.status(200).json({
            message:"Product created successfully",
            Product:result
        })
    }).catch((error) => {
        res.status(400).json({
            message:"something went wrong",
            error:error
        })
    })
}

const updateProduct =(req,res)=>{

    const productid = req.params.productid

    updatedBody={

        productid: req.body.productid,
        productname: req.body.productname,
        categoryname: req.body.categoryname,
        categoryid: req.body.categoryid

    }

    Product.update(updatedBody, {where: {productid:productid}})
    .then((result)=>{
        res.status(200).json({
            message:"Product updated successfully",
            updatedproduct:updatedBody

        })
    }).catch((error)=>{
        res.status(400).json({message:"something went wrong",
        error:error
    })
})
        
}

const deleteById = (req,res) => {
    const productid = req.params.productid;
    Product.destroy({where: {productid:productid}})
    .then((result)=>{
        res.status(200).json({
            message:"product deleted successfully"
        })
    }).catch((error)=>{
        res.status(400).json({
        message:"something went wrong",
        error:error
        })
        
    })
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductByID,
    updateProduct,
    deleteById
}