const db = require('../models')

const Category = db.categories
const Product = db.products
const getAllCategories = (req,res)=>{

    /* let page=parseInt(req.query.page)   
     let limit =3;
      models.Product.findAndCountAll({
         limit:3,
         offset:limit*(page-1)*/
     
        //  let page=parseInt(req.query.page)   
        //  let limit =3;
         Category.findAll().then((result=>{
 
         res.status(200).json({
             message:"all data is fetched",
             show:result
         })
      })).catch(error=>{
         res.status(401).json({
             message: "Something went wrong!",
             error: error
         })
      })
     
 }

 const getCategoryByID = (req,res)=>{
 
    const categoryid = req.params.categoryid
    const page = parseInt(req.query.page) || 1;
    // const categoryid = req.query.categoryid 
    const limit = 3
    const offset = (page - 1) * limit;
    Category.findOne({
        
        where: {categoryid:categoryid},
        include: [{
            model: Product,
            as:'products',
            attributes: ['productid','productname','categoryid'],
            limit:limit,
            offset:offset
        }],
        
    }).then((result)=>{
        res.status(200).json({
            message: `data with id ${categoryid} is fetch successfully`,
            category: result
        })       
    }).catch(error=>{
        res.status().json({
            message:"something went wrong",
            error:error
        })
    })
}


const createCategory = (req,res)=>{
    const requestBody = {
        categoryname: req.body.categoryname,
        categoryid: req.body.categoryid
    }
    Category.create(requestBody)
    .then((result)=>{
        res.status(200).json({
            message:"Category created successfully",
            Category:result
        })
    }).catch((error) => {
        res.status(400).json({
            message:"something went wrong",
            error:error
        })
    })
}

const updateCategory =(req,res)=>{

    const categoryid = req.params.categoryid

    updatedBody={

        categoryname: req.body.categoryname,
        categoryid: req.body.categoryid

    }

    Category.update(updatedBody, {where: {categoryid:categoryid}})
    .then((result)=>{
        res.status(200).json({
            message:"Category updated successfully",
            updatedproduct:updatedBody

        })
    }).catch((error)=>{
        res.status(400).json({
            message:"something went wrong",
            error:error
    })
})
        
}

const deleteCategoryById = (req,res) => {
    const categoryid = req.params.categoryid;
    Category.destroy({where: {categoryid:categoryid}})
    .then((result)=>{
        res.status(200).json({
            message:"Category deleted successfully"
        })
    }).catch((error)=>{
        res.status(200).json({
        message:"something went wrong",
        error:error
    })
})
}

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryByID,
    updateCategory,
    deleteCategoryById
}