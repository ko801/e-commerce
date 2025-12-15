const btn=document.querySelector('.middle_btn');
const collection=document.querySelector('.all_card');
btn.addEventListener('click',()=>{
  collection.scrollIntoView({behavior:'smooth'});
});

let contact1=document.querySelector(".contact1");
 contact1.addEventListener("click",function(){
  window.location.href="contact.html";

});

let collection1=document.querySelector(".collection1");
collection1.addEventListener("click",function(){
  window.location.href="collection.html";
});

let new1=document.querySelector(".new1");
new1.addEventListener("click",function(){
  window.location.href="new.html";
});

let cart1=document.querySelector(".cart1");
cart1.addEventListener("click",function(){
  window.location.href="cart.html";
});



