const { addProduct, findProductbyName,fetchAllProducts} = require('../queries/product');
const { runQuery } = require('../config/database.config');

const createProduct = async (body) => {
    const { name, price, quantity } = body;
    const productExist= await runQuery (findProductbyName,[name])
    if (productExist.length > 0){
        // console.log(category)
        throw{
            code:409,
            message:'product already exist',
            data:null,
            status:'error'
        }
    } 
    const response = await runQuery(addProduct, [name,price,quantity])
    return {
        code: 201,
        status: 'success',
        message: 'New product added successfully',
        data:response
    }
}

    
const getAllProducts= async ()=>{
    const fetch= await runQuery(fetchAllProducts)
    return{
        code: 202,
        status: 'success',
        message: 'All products fetched successfully',
        data:fetch
    }
}

module.exports = {
    createProduct,
    getAllProducts
};
