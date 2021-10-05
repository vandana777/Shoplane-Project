
var productGrid = document.getElementById("product-grid");
var clothingSection = document.getElementById("clothing-section");
console.log(clothingSection);
var accesorySection = document.getElementById("accesory-section");

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",  function(response){
    console.log(response);

    for(var i=0; i < response.length; i++){
        if(response[i].isAccessory == false){
        clothingSection.innerHTML += `
        <div id="top-section">
           <div id="product-img"><a href="../html/product.html?id=${response[i].id}">
             <img id="product-image" src="${response[i].preview}"/></a>
           </div>
           <div id="product-desc">
           <h1 id="product-name">${response[i].name}</h1> 
           <h1 id="product-brand">${response[i].brand}</h1>
           <h1 id="product-price">Rs ${response[i].price}</h1>
          </div> 
        </div>`}
        else{
            accesorySection.innerHTML += `
        <div id="top-section">
           <div><a href="../html/product.html?id=${response.id}">
             <img id="product-image" src="${response[i].preview}"/></a>
           </div>
           <div id="product-desc">
           <h1 id="product-name">${response[i].name}</h1> 
           <h1 id="product-brand">${response[i].brand}</h1>
           <h1 id="product-price">Rs ${response[i].price}</h1>
          </div> 
        </div>`
        }
  }
});

