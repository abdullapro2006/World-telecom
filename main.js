const addToBasket = document.querySelectorAll('button');

addToBasket.forEach(button=>{
    button.addEventListener('click',handleButton)
})


function handleButton(e) {
  const id = e.target.getAttribute("data-id");
  const price = e.target.getAttribute("data-price");
  const title = e.target.getAttribute("data-title");

  const product = {
   id,
   price,
   title
  }
const ProductArr = [product];

 const convertedProduct = JSON.stringify((ProductArr));

 localStorage.setItem("basket",convertedProduct);
}