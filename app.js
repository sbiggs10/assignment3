const text = document.querySelector('.header');

text.classList.add ("headerbackground");

const header = document.querySelector(".header").style.color = "white";


const userList = document.querySelector(".questions");
const listInput = document.querySelector(".list-input");
const addlistBtn = document.querySelector(".addlistBtn");

addlistBtn.addEventListener("click", function() {
    const newLi = document.createElement('LI');

    const liContent = document.createTextNode(listInput.value);

    newLi.appendChild(liContent);

    userList.appendChild(newLi);

});


let flowers = 100; //this is a global variable

flowers = flowers / 10;

flowers = flowers + 65; //mathematical operations on variable 

const types = ["lily", "Rose", "Lilac", "Daisy"];

for (type of types) {
    console.log (type);
    if (type === "Lilac")
{
    console.log ("Lilac will be the last flower on the list!")
    break;
}}

let price = 10;

while (price < 30) {
    console.log ("The price will go up soon!");

    price++;
}

let message = "Hi! My name is Sadie Biggs and I have a dog named Daisy!"; //this is a string variable


const person = {firstName:"Sadie", lastName:"Biggs", age:20, eyeColor:"blue"}; //object variable


{
    let blooms = 96;
    
    blooms = blooms + 36;
}  // this is a block variable


console.log(message);
