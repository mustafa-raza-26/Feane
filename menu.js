let menulink = document.getElementById('menu');
window.onload = function () {
    menulink.style.color = "rgb(255, 255, 22)";
}

// let display = document.getElementById('display');

async function fetchAllData() {
    const API = await fetch('https://dummyjson.com/recipes');
    const data = await API.json();

    renderAllData(data.recipes);
}

function renderAllData(recipes) {
    display.innerHTML = "";

    recipes.forEach(item => {
        display.innerHTML += `
            <div class="crd p-0 col-11 col-md-3">
              <div class="image">
                <img src="${item.image}" alt="">
              </div>
              <div class="cd-content curve">
                <h5>${item.name}</h5>
                <p>Full menu item</p>
                <div class="d-flex justify-content-between pt-2">
                  <div>$20</div>
                  <div><i class="fa-solid fa-cart-shopping cart"></i></div>
                </div>
              </div>
            </div>
        `;
    });
}

fetchAllData();

let all = document.getElementById('all')
all.addEventListener('click', async () => {
  all.style.color = 'White';  
  all.style.backgroundColor = 'rgb(22, 22, 35)';
  cookies.style.color = 'rgb(22, 22, 35)';  
  cookies.style.backgroundColor = 'White';

  const API = await fetch('https://dummyjson.com/recipes');
  const data = await API.json();
  const data_recipes = data.recipes;
  
  display.innerHTML = "";
  for (let i = 0; i < data_recipes.length; i++) {
    display.innerHTML += `
      <div class="crd p-0 col-11 col-md-3">
              <div class="image">
                <img src="${data_recipes[i].image}" alt="">
              </div>
              <div class="cd-content curve">
                <h5>${data_recipes[i].name}</h5>
                <p>Full menu item</p>
                <div class="d-flex justify-content-between pt-2">
                  <div>$20</div>
                  <div><i class="fa-solid fa-cart-shopping cart"></i></div>
                </div>
              </div>
            </div>`
  }
})


// chicken filter
let chicken = document.getElementById('chicken')
chicken.addEventListener('click', async () => {
  all.style.color = 'rgb(22, 22, 35)';  
  all.style.backgroundColor = 'White';
  chicken.style.color = 'White';
  chicken.style.backgroundColor = 'rgb(22, 22, 35)';

  const API = await fetch('https://dummyjson.com/recipes');
  const data = await API.json();
  const data_recipes = data.recipes;
  
  let filterChicken = data_recipes.filter(item => item.name.toLowerCase().includes('chicken') );
  display.innerHTML = "";
  for (let i = 0; i < filterChicken.length; i++) {
    display.innerHTML += `
      <div class="crd p-0 col-11 col-md-3">
              <div class="image">
                <img src="${filterChicken[i].image}" alt="">
              </div>
              <div class="cd-content curve">
                <h5>${filterChicken[i].name}</h5>
                <p>Full menu item</p>
                <div class="d-flex justify-content-between pt-2">
                  <div>$20</div>
                  <div><i class="fa-solid fa-cart-shopping cart"></i></div>
                </div>
              </div>
            </div>`
  }
})



// Pizza filter
let pizza = document.getElementById('pizza')
pizza.addEventListener('click', async () => {
  all.style.color = 'rgb(22, 22, 35)';  
  all.style.backgroundColor = 'White';
  chicken.style.color = 'rgb(22, 22, 35)';  
  chicken.style.backgroundColor = 'White';
  pizza.style.color = 'White';
  pizza.style.backgroundColor = 'rgb(22, 22, 35)';

  const API = await fetch('https://dummyjson.com/recipes');
  const data = await API.json();
  const data_recipes = data.recipes;
  
  let filterpizza = data_recipes.filter(item => item.name.toLowerCase().includes('pizza') );
  display.innerHTML = "";
  for (let i = 0; i < filterpizza.length; i++) {
    display.innerHTML += `
      <div class="crd p-0 col-11 col-md-3">
              <div class="image">
                <img src="${filterpizza[i].image}" alt="">
              </div>
              <div class="cd-content curve">
                <h5>${filterpizza[i].name}</h5>
                <p>Full menu item</p>
                <div class="d-flex justify-content-between pt-2">
                  <div>$20</div>
                  <div><i class="fa-solid fa-cart-shopping cart"></i></div>
                </div>
              </div>
            </div>`
  }
})

// Pasta filter

let pasta = document.getElementById('pasta')
pasta.addEventListener('click', async () => {
  all.style.color = 'rgb(22, 22, 35)';  
  all.style.backgroundColor = 'White';
  pizza.style.color = 'rgb(22, 22, 35)';  
  pizza.style.backgroundColor = 'White';
  pasta.style.color = 'White';
  pasta.style.backgroundColor = 'rgb(22, 22, 35)';

  const API = await fetch('https://dummyjson.com/recipes');
  const data = await API.json();
  const data_recipes = data.recipes;
  
  let filterpasta = data_recipes.filter(item => item.name.toLowerCase().includes('pasta') );
  display.innerHTML = "";
  for (let i = 0; i < filterpasta.length; i++) {
    display.innerHTML += `
      <div class="crd p-0 col-11 col-md-3">
              <div class="image">
                <img src="${filterpasta[i].image}" alt="">
              </div>
              <div class="cd-content curve">
                <h5>${filterpasta[i].name}</h5>
                <p>Full menu item</p>
                <div class="d-flex justify-content-between pt-2">
                  <div>$20</div>
                  <div><i class="fa-solid fa-cart-shopping cart"></i></div>
                </div>
              </div>
            </div>`
  }
})

// cookies filter
let cookies = document.getElementById('cookies')
cookies.addEventListener('click', async () => {
  all.style.color = 'rgb(22, 22, 35)';  
  all.style.backgroundColor = 'White';
  pasta.style.color = 'rgb(22, 22, 35)';  
  pasta.style.backgroundColor = 'White';
  cookies.style.color = 'White';
  cookies.style.backgroundColor = 'rgb(22, 22, 35)';

  const API = await fetch('https://dummyjson.com/recipes');
  const data = await API.json();
  const data_recipes = data.recipes;
  
  let filtercookies = data_recipes.filter(item => item.name.toLowerCase().includes('cookies') );
  display.innerHTML = "";
  for (let i = 0; i < filtercookies.length; i++) {
    display.innerHTML += `
      <div class="crd p-0 col-11 col-md-3">
              <div class="image">
                <img src="${filtercookies[i].image}" alt="">
              </div>
              <div class="cd-content curve">
                <h5>${filtercookies[i].name}</h5>
                <p>Full menu item</p>
                <div class="d-flex justify-content-between pt-2">
                  <div>$20</div>
                  <div><i class="fa-solid fa-cart-shopping cart"></i></div>
                </div>
              </div>
            </div>`
  }
})