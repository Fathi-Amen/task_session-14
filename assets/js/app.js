const products = [
  {
    id: 1,
    slug: "galaxy-s24-ultra",
    title: "Samsung Galaxy S24 Ultra",
    description: "6.8-inch AMOLED display, Snapdragon 8 Gen 3, 200MP camera.",
    image: "./assets/media/1.jpg",
    old_price: 1499,
    price_after_sale: 1299,
    currency: "USD"
  },
  {
    id: 2,
    slug: "iphone-15-pro-max",
    title: "Apple iPhone 15 Pro Max",
    description: "A17 Pro chip, titanium design, 48MP camera, long battery life.",
    image: "./assets/media/2.jpg",
    old_price: 1599,
    price_after_sale: 1499,
    currency: "USD"
  },
  {
    id: 3,
    slug: "macbook-air-m3",
    title: "MacBook Air M3",
    description: "13-inch Retina display, M3 chip, 8GB RAM, 256GB SSD.",
    image: "./assets/media/3.jpg",
    old_price: 1399,
    price_after_sale: 1249,
    currency: "USD"
  },
  {
    id: 4,
    slug: "lenovo-legion-7",
    title: "Lenovo Legion 7",
    description: "AMD Ryzen 9, RTX 4070, 16GB RAM, 1TB SSD, 16-inch QHD display.",
    image: "./assets/media/4.jpg",
    old_price: 2199,
    price_after_sale: 1999,
    currency: "USD"
  },
  {
    id: 5,
    slug: "anker-powercore-20000",
    title: "Anker PowerCore 20000mAh Power Bank",
    description: "High-capacity portable charger with fast charging.",
    image: "./assets/media/5.jpg",
    old_price: 69,
    price_after_sale: 49,
    currency: "USD"
  },
  {
    id: 6,
    slug: "sony-wh-1000xm5",
    title: "Sony WH-1000XM5 Headphones",
    description: "Industry-leading noise-canceling wireless headphones.",
    image: "./assets/media/6.jpg",
    old_price: 399,
    price_after_sale: 349,
    currency: "USD"
  },
  {
    id: 7,
    slug: "logitech-mx-master-3s",
    title: "Logitech MX Master 3S Mouse",
    description: "Ergonomic wireless mouse with precision tracking and fast scrolling.",
    image: "./assets/media/7.jpg",
    old_price: 119,
    price_after_sale: 99,
    currency: "USD"
  },
  {
    id: 8,
    slug: "apple-airpods-pro-2",
    title: "Apple AirPods Pro (2nd Gen)",
    description: "Active noise cancellation, personalized spatial audio, USB-C case.",
    image: "./assets/media/8.jpg",
    old_price: 299,
    price_after_sale: 269,
    currency: "USD"
  }
];
const containerProducts= document.querySelector(".container")
function addProducts(){
    
}
for(let i=0 ; i < products.length ; i++){
    containerProducts.innerHTML +=
    `
    <div class="row">
        <div class="image"><img src="${products[i].image}" ></div>
        <div class="data_of_product">
            <p class="title">${products[i].title}</p>
            <p class="description">${products[i].description}</p>
            <p class="old_price">${products[i].old_price}</p>
            <p class="price_after_sale">${products[i].price_after_sale}</p>
            <p class="currency">${products[i].currency}</p>
        </div>
    </div>
        `
}
console.log(products[i].image)