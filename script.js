let monitorsContainter = document.querySelector(".monitorsContainer");

async function fetchProducts() {
    try{
        const response = await fetch("./products.json");
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}
async function getProducts(category, container){
    const products = await fetchProducts();
    for(product of products[category]){

        container.innerHTML += 
        `
        <div class="monitor">
            <img src="${product.image}" alt="Monitor">
            <h3>${product.name}</h3>
            <p>$ ${product.price}</p>
            <button class="btn">Comprar</button>
        </div> 
        `
    }
}
getProducts("monitors", monitorsContainter);

