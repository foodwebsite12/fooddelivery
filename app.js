let h1=document.querySelector("#home h1");
let button=document.querySelector("#home button");
let home =document.querySelector("#home");
let input=document.querySelector("input");

setInterval(() => {
    h1.style.color = "red";
    h1.innerText="Welcome to Our Website ✨🙏";
    input.setAttribute("placeholder","Chicken Biryani,Paneer Pyaja");
    button.style.backgroundColor = "red";
    
    home.style.background ="url(image/bulkfood.jpg)";

}, 3000);

setInterval(() => {
    h1.style.color = "blue";
    h1.innerText="Great Offers Coming Soon 🎁🎉✨";
    button.style.backgroundColor = "blue";
    home.style.background ="url(image/tastyfood.jpg)";

    input.setAttribute("placeholder","Kadahi Paneer,Samosa Chaat")
}, 8000);

setInterval(() => {
    h1.style.color = "green";
    h1.innerText="Eat Healthy Be healthy 👍🥰";

    button.style.backgroundColor = "green";

    home.style.background ="url(image/tasty2.jpg)";

    input.setAttribute("placeholder","Chole Bhature,Rs100 Thali-Chicken,Naan,4roti")

   

}, 13000);



const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
    mainMenu.style.display = 'flex';
    // mainMenu.style.top = '0';
    mainMenu.style.left = '0';  //why it is used here if zero is already in style.css
    mainMenu.style.right = '-30px';   
}


function close(){
    // mainMenu.style.top = '-120%';
    mainMenu.style.left = '-120%';
    mainMenu.style.right = '240%';
    mainMenu.style.transition = 'all 1s ease';
}                                        