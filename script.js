document.addEventListener('DOMContentLoaded',function(){
    let products = document.querySelector('.products')
    async function fetchProducts(url){
        try{
            let data = await fetch(url);
            let response = await data.json();
            console.log(response)
            for(let i=100; i<response.length;i++){
                let description=response[i].description;
                let name =response[i].name
                products.innerHTML +=`
                <div class="product">
                        <img src="${response[i].image_link}" alt="" class="product-img">
                    <div class="product-content">
                        <h2 class="brand">Brand: ${response[i].brand}</h2>
                        <h2 class="product-name">${name.length>18? name.substring(0,18).concat('...'):name}</h2>
                        <h4 class="product-category">${response[i].category}</h4>
                        <p class="product-description">${description.length>20 ? description.substring(0,50).concat('...more'):description}</p>
                        <div class="product-price-container">
                            <h3 class="product-price">$${response[i].price}</h3>
                            <a href="#!" data-productId="${response[i].id}" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
                        </div>
                    
                    </div>
                        
                </div>
                `;
            }
        } catch (err){
            console.log(err);
        }


    };
    fetchProducts('https://makeup-api.herokuapp.com/api/v1/products.json')
})