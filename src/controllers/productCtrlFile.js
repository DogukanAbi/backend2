const {productList} = require('../product');

exports.productCtrlFile = (req, res) => {
    try{
        res.status(200).json({
            products: productList
        })
    } catch(error) {
        console.log(error);
    }
}