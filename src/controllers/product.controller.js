const { createProduct, getAllProducts,} = require('../services/product.services');

const newProduct = async (req, res, next) => {
    try {
       
        const result = await createProduct(req.body);
        return res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};
const fetchProducts = async (req, res, next) => {
    try {
        const result = await getAllProducts();
        return res.status(result.code).json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    newProduct,
    fetchProducts
};
