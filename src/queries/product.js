const addProduct=`
INSERT INTO products(
    name,
    price,
    quantity
)VALUES($1,$2,$3) RETURNING product_id, name, price,quantity
`
const findProductbyName =`
 SELECT product_id, name, price, quantity FROM products WHERE name = $1
`;

const fetchAllProducts=`
SELECT  name,price,quantity_sold,quantity FROM products
`
const categoryProducts= `
    SELECT p.products_id, p.name, p.price,p.quantity,p.quantity_sold,
        json_build_object
        (
            'category_id',c.id,
            'name',c.name
        )as category
        FROM products p
        INNER JOIN category c on p.category_id
    `;



module.exports={
    addProduct,
    findProductbyName,
    fetchAllProducts,
    categoryProducts
    
}