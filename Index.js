const waters = [
  {
    name: "Tap Water",
    Note: "The water bill is expensive and you have to bring a bottle.",
    price: 0.01,
    image: "PictureFolder/Tap Water.png",
    brand: "Any Bottle",
  
  },
  {
    name: "Poland Spring",
    Note: "This is the default water. Very Tasty",
    price: 1.01,
    image: "PictureFolder/Poland Spring.png",
    brand: "Plastic Bottle",
  },
  {
    name: "Pure Life",
    price: 0.51,
    image: "PictureFolder/Pure Life.png",
    brand: "Plastic Bottle",
    Note: "This Water tastes like crap.",
  },
  {
    name: "Smart Water",
    price: 1.51,
    image: "PictureFolder/Smart Water.png",
    brand: "Plastic Bottle",
    Note: "The dumb people pay more for water.",
  },
  {
    name: "Fiji Water",
    price: 3.01,
    image: "PictureFolder/Fiji Water.png",
    brand: "Plastic Bottle",
    Note: "These people don't like money.",
  },
  {
    name: "Aquafina",
    price: 1.01,
    image: "PictureFolder/Aquafina.png",
    brand: "Plastic Bottle",
    Note: "Very Fancy Name :). ",
  },
  {
    name: "Evian",
    price: 4.01,
    image: "PictureFolder/Evian.png",
    brand: "Plastic Bottle",
    Note: " Natural Spring H20",
  },
  {
    name: "Dasani",
    price: 1.01,
    image: "PictureFolder/Dasani.png",
    brand: "Plastic Bottle",
    Note: "Taste normal.",
  },
  {
    name: "Voss",
    price: 2.51,
    image: "PictureFolder/Voss.png",
    brand: "Plastic Bottle",
    Note: "Normal Water But in a Fancy Bottle.",
  },
  {
    name: "Rain Water",
    price: 0.01,
    image: "PictureFolder/Rain Water.png",
    brand: "Any Bottle",
    Note: "I need some extra pennys.",
  },
  {
    name: "La Croix",
    price: 5.01,
    image: "PictureFolder/Sparkling Water.png",
    brand: "Any Bottle",
    Note: " Fizzing Favored Water",
  },
  {
    name: "Vita Coco",
    price: 3.01,
    image: "PictureFolder/Coconut Water.png",
    brand: "Any Bottle",
    Note: " Fresh Coconut Water ( I don't really like it tho )",
  },
  {
    name: "Essentia",
    price: 4.01,
    image: "PictureFolder/Essentia.png",
    brand: "Plastic Bottle",
    Note: " This is an essential thing you need in your home",
  },
  {
    name: "Mountion Valley",
    price: 6.01,
    image: "PictureFolder/Mountain Valley.png",
    brand: "Plastic Bottle",
    Note: " Totally a water from a valley.", 
  },
  {
    name: "Purified Water",
    price: 689.01,
    image: "PictureFolder/Purified.png",
    brand: "Plastic Bottle",
    Note: "Water :D ",
  },
  {
    name: "Niagara Water",
    price: 799.99,
    image: "PictureFolder/Niagara.png",
    brand: "Plastic Bottle",
    Note: "Water from Niagara Falls",
  },
  {
    name: "Just Water",
    price: 32.01,
    image: "PictureFolder/Just Water.png",
    brand: "Plastic Bottle",
    Note: "Its just water what else do you wanna know ",
  },
  {
  name: "San Pellegrino",
  price: 4.51,
  image: "PictureFolder/San Pellegrino.png",
  brand: "Glass Bottle",
  Note: "Premium Italian sparkling mineral water.",
  },
  {
    name: "Perrier",
    price: 3.99,
    image: "PictureFolder/Perrier.png",
    brand: "Glass Bottle",
    Note: "Classic French carbonated water with a crisp taste.",
  },
  {
    name: "Kirkland Signature",
    price: 0.25,
    image: "PictureFolder/Kirkland.png",
    brand: "Plastic Bottle",
    Note: "Bulk water for Costco legends.",
  }
];

waters.forEach((waters) =>{
    document.querySelector(".container").insertAdjacentHTML(
        "afterbegin",
        `<div class="card" data-brand="${waters.brand}" >
        <h2>${waters.name}</h2>
        <img src="${waters.image}"/>
        <p>Price: ${waters.price} </p>
        <p>Note: ${waters.Note}</p>
        <button class = "btn_water" data-name="${waters.name}"|>Add To Cart</button>
        </div>`
    );
}
)
function getcards(){
  const buttons = document.querySelectorAll(".btn");
  const btnArr = Array.from(buttons);
  btnArr.forEach((btn) => 
    btn.addEventListener("click", function (event){
      console.log(
        event.target.closest(".card").children[0].textContent
      );
    addToCart()
  })

);
}
getcards();

function filterByBrand(brand){
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) =>{
        const cardCategory = card.dataset.brand
        if (cardCategory === brand || brand === "All"){
            card.style.display = "";
        } else{
            card.style.display = "none"
        }
    });
}

filterByBrand("All")

const filterbuttons = document.querySelectorAll(".Brands")
filterbuttons.forEach((button) =>
  button.addEventListener("click", function(event) {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const cardCategory = card.dataset.brand
        if (cardCategory === event.target.textContent || event.target.textContent === "All"){
            card.style.display = "";
        } else{
            card.style.display = "none"
        }
    }) 

  }))
let cart = [];
let total = 0;

function addToCart() {
  const Purchase_buttons = document.querySelectorAll(".btn_water");
  Purchase_buttons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      const card = event.target.closest(".card");
      const waterName = card.children[0].textContent;
      const waterPriceText = card.children[2].textContent;
      const waterPrice = parseFloat(waterPriceText.replace("Price: ", ""));

      cart.push([waterName, waterPrice]);
      total += waterPrice;


      document.querySelector(".Cart").innerHTML = "";
      cart.forEach((item) => {
        document.querySelector(".Cart").insertAdjacentHTML(
          "beforeend",
          `<p>${item[0]}: $${item[1].toFixed(2)}</p>`
        );
      });

      document.querySelector(".Total").innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
    });
  });
}

addToCart();

