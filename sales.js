
var storeInventory;
function getProducts(e) {
    // create an xhr to load products
    var xhrProduct = new XMLHttpRequest();
    xhrProduct.open("GET", "products.json");
    // Listen for when the load event is broadcast
    // and execute an anonymous callback.
    xhrProduct.addEventListener("load", function(event) {
        // Set the value of the private array
        // List the products in the DOM
        // Parse JSON objects into a native JavaScript Object
        storeInventory = JSON.parse(event.target.responseText).products;
        console.log(storeInventory);
            populatePage(storeInventory);

    });
    xhrProduct.send();
}
getProducts();

function getCategories(e) {
    // create an xhr to load products
    var xhrCategory = new XMLHttpRequest();
    xhrCategory.open("GET", "categories.json");
    // Listen for when the load event is broadcast
    // and execute an anonymous callback.
    xhrCategory.addEventListener("load", function(e) {
        // Set the value of the private array
        // List the categories in the DOM
        // Parse JSON objects into a native JavaScript Object
        var productCategories = JSON.parse(event.target.responseText).categories;
        console.log(productCategories);
    });
    xhrCategory.send();
}
getCategories();

function populatePage(storeInventory) {
    var output = document.querySelector(".inventory");
    var results = "";
    console.log(storeInventory);
    storeInventory.forEach(function(products, index) {
        results += `<div class="row">
    <div class="col-md-4">
    <h3>Name: ${products.name}</h3>
    <h5>Price: ${products.price}</h5>
  </div>`;
    results += `</div>`;
    output.innerHTML = results;
    });
}




//     <h5>Id: ${products.id}</h5>
//     <h5>category_id: ${products.category_id}</h5>
