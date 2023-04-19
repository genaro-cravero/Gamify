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

function changeAtributtes() {
    const logo1 = document.getElementById('logo1');
    const logo2 = document.getElementById('logo2');
    const video = document.getElementById('video');
    const favicon = document.getElementById('favicon');
    const style = document.getElementById('style');
  
    const logo1Src = logo1.src;

  
    if (logo1Src.endsWith('GamifyLogoYellow.png')) {
      logo1.src = './assets/images/GamifyLogo.png';
      logo2.src = './assets/images/GamifyLogo.png';
      video.src = './assets/videos/Loop.mov';
      favicon.href = './assets/images/Logo.png';
      style.href = './style.css';
    } else {
      logo1.src = './assets/images/GamifyLogoYellow.png';
      logo2.src = './assets/images/GamifyLogoYellow.png';
      video.src = './assets/videos/LoopYellow.mp4';
      favicon.href = './assets/images/LogoYellow.png';
      style.href = './stylebh.css';
    }
  }