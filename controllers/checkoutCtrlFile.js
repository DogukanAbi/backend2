const { productList } = require('../product');
const Order = require('../models/orderModel');


exports.checkoutCtrlFunction = async(req, res) => {
    res.render('checkout');
    console.log(req.body)
    console.log("Products have been displayed");

    const productsE = await Order.findOne({products: req.body.products});
    console.log("Yes, we`ve come so far");
    // console.log(req.body);
    let products = [];

    if (productsE) {
        console.log(products);

        const savedProducts = await Order({
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity
        });
        await savedProducts.save();
        console.log(savedProducts);
        console.log("Purchased products have been saved");
        res.redirect("index");
    }
 
}

// exports.checkoutCtrlFunction = async(req, res) => {
//     res.render('checkout');
//     console.log("You have been redirected");

//     const products = await Order({productName: req.body.productName});
//     console.log(req.body.productName);


//     if(products) {
       
//         console.log(req.body.productName);
//         console.log("Here are your products");

//         let productList = [];


//     }
//     const prod = new Order({
//     //     productName: req.body.productName,
//     //     price: req.body.price,
//     //     quantity: req.body.quantity
//     products: req.body.products
//     });
//     console.log(prod);
// }



// exports.checkoutCtrlFunction = async(req, res) => {
//     res.render('checkout');
//     try{
//         const productsFromFronted = await Order.findOne({products: req.body.products});
//         console.log(productsFromFronted);
    
//         function productsToBuy() {
//             let products = [];
            
//             productList.forEach( singleProductList => {
//               productsFromFronted.forEach(singleProductFrontend => {
//                 if( singleProductList.tag === singleProductFrontend.tag ) {
//                   products.push({
//                     name: singleProductList.name,
//                     description: singleProductList.description,
//                     images: [singleProductList.image],
//                     amount: singleProductList.price * 100,
//                     currency: 'usd',
//                     quantity: singleProductFrontend.inCart
//                   })
//                 }
//               })
//             })
      
//             return products
//           }
      
//           console.log(productsToBuy())
//     } catch(error) {
//         console.log(error);
//     }
// }




// exports.checkoutCtrlFunction = (req, res) => {
//   try {
    

//     const productsFromFronted = req.body.products;
   

//     function myProducts() {
//       // const getProducts = JSON.parse(localStorage.getItem('productsInCart'));
//       // console.log(getProducts)
    
//       const products = [ ];

//       productList.forEach( singleProductList => {
//         if (singleProductList.tag === singleProductFrontend.tag) {

//         }
//       })
//   }
//   myProducts();
// } catch(error) {
//   console.log(error);
// }
// }


// exports.checkoutCtrlFunction = (req, res) => {
//   res.render('checkout');
// }

