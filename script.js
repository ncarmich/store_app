var products = [
  {
    id: 0,
    name: "Apples",
    price: "2.99",
    image:
      "https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color: "red"
  },
  {
    id: 1,
    name: "Bananas",
    price: "2.50",
    image:
      "https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color: "gold"
  },
  {
    id: 2,
    name: "oranges",
    price: "3.50",
    image:
      "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color: "orange"
  }
];


// Create a div and give it a class of "popUp". Append that div to the body
// function popUp() {
//   this.name="box";
//   this.color="blue";

//   this.ele = document.createElement("div");
//   this.ele.classList.add("popUp");
//   document.body.append(this.ele);
// }



function fruit(nm, pr) {
  this.name = nm;
  this.price = pr;

  this.ele = document.createElement("div");
  this.ele.setAttribute("id", "product");
  this.ele.innerHTML = "Name: " + this.name + " " + "Price: $" + this.price;
  this.ele.classList.add("product");
  document.body.appendChild(this.ele);
}

function colorO(x){
 x.style.borderColor="orange";
}
function colorR(x){
 x.style.borderColor="red";
}
function colorG(x){
 x.style.borderColor="gold";
}
function normal(x){
  x.style.borderColor="black";
}
function hide(x){
  x.className=("hidden");
}
function showO(x){
  x.innerHTML= new fruit("Oranges", "3.99");
}
function showB(x){
  x.innerHTML= new fruit("Banana", "2.50");
}
function showA(x){
  x.innerHTML= new fruit("Apple", "2.99");
}


// function switchView(x){
//   if(document.getElementById("orange")){
//     x.innerHTML= new fruit("Oranges", "3.99");
//   }else if(document.getElementById("apple")){
//      x.innerHTML= new fruit("Apple", "2.99");
//   }else if(document.getElementById("banana")){
//       x.innerHTML= new fruit("Banana", "2.50");
//   }
// 
 // document.body.appendChild(this.ele);

  // document.getElementById("popUp").onclick = function changeContent() {
  //   document.getElementById("popUp").className = "hidden";
  // };