async function fetchProducts() {
    try{
        const response = await fetch("./products.json");
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

////Obtain products from JSON 

async function getProducts(){
    const products = await fetchProducts();
    let categories = Object.keys(products);

    //? for each category, create a container and add the products
    categories.forEach((category, index) =>{

        let container = document.querySelector(`.${category}Container`);

        //? for each product, create a card and add it to the container
        for(product of products[category]){

            container.innerHTML += 
            `
            <div class="card">
                <img src="${product.image}" alt=${product.alt}>
                <h3>${product.name}</h3>
                <p>$ ${product.price}</p>
                <button class="btn">Comprar</button>
            </div> 
            `
        }
    });
    
}
getProducts();

const form = document.querySelector('form');
const submitButton = document.querySelector('input[type="submit"]');
function enviarFormulario(event) {
  event.preventDefault(); 
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('msg').value;

  const datosFormulario = { name, email, msg };

  let messages = localStorage.getItem('messages');

  if (!messages) {
    messages = [];
  }
  
  messages.push(datosFormulario);

  localStorage.setItem('messages', JSON.stringify(messages));

  form.reset();
}

form.addEventListener('submit', enviarFormulario);
