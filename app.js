// Carousal Btn
const buttons = document.querySelectorAll('.custom-btn');
  const carousel = document.getElementById('customCarousel');

  carousel.addEventListener('slide.bs.carousel', function (e) {
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[e.to].classList.add('active');
  });

// Data Fetch API
let display = document.getElementById('display');
let viewMoreBtn = document.getElementById('view_Btn');

let allRecipes = [];
let showCount = 9;

async function fetchData() {
    const API = await fetch('https://dummyjson.com/recipes');
    const data = await API.json();

    allRecipes = data.recipes; // sab data store kar liya
    renderData();
}

function renderData() {
    display.innerHTML = "";

    let visibleData = allRecipes.slice(0, showCount);

    visibleData.forEach(recipes => {
        display.innerHTML += `
            <div class="crd p-0 col-11 col-md-3">
              <div class="image">
                <img src="${recipes.image}" alt="">
              </div>
              <div class="cd-content curve">
                <h5>${recipes.name}</h5>
                <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                <div class="d-flex justify-content-between pt-2">
                  <div>$20</div>
                  <div><i class="fa-solid fa-cart-shopping cart"></i></div>
                </div>
              </div>
            </div>
        `;
    });

    // button hide/show
    if (showCount >= allRecipes.length) {
        viewMoreBtn.style.display = "none";
    } else {
        viewMoreBtn.style.display = "block";
    }
}

// View More click
viewMoreBtn.addEventListener("click", () => {
    showCount = allRecipes.length; // sab show
    renderData();
});

fetchData();