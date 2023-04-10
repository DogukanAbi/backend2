const con = document.getElementById("continue");

con.addEventListener('click', () => {
    console.log("You`ve clicked on the button");
    con.textContent = "Processing...";
    // buyProducts(myProducts());
    myProducts();
    
})


function myProducts() {
    const getProducts = JSON.parse(localStorage.getItem('productsInCart'));
  
    const products = [ ];
  
    console.log(getProducts);
    for( const property in getProducts) {
      products.push({
        tag: getProducts[property].tag,
        inCart: getProducts[property].inCart
      })
    }
     console.log(products);
    // return products;
  };


  // async function buyProducts(cartProducts) {
  //   try {
    
  //     const body = JSON.stringify({
  //       products: cartProducts
  //     })
  
  //     const response = await axios.post(`https://localhost:5000/checkout`, body, {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       }
  //     })
  
  //     console.log(response.data);
  
  //     localStorage.setItem('sessionId', response.data.session.id);
  
  //     await stripe.redirectToCheckout({
  //       sessionId: response.data.session.id
  //     })
  
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  