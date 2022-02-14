'use strict';

window.addEventListener("DOMContentLoaded",() =>{
   
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');
let close = document.querySelector('#close');

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');



menu.addEventListener('click',()=>{
    console.log('salom');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
 })

 window.onscroll = ()=>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

   section.forEach(sec =>{

      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');
  
      if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
        });
      };
  
    });
 }

 searchIcon.addEventListener('click',()=>{
    searchForm.classList.toggle('active');
 })

 close.addEventListener('click',()=>{
   searchForm.classList.remove('active');
})

var swiper = new Swiper(".home-slider", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 7500,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   loop: true,
 });

 var swiper = new Swiper(".review-slider", {
   spaceBetween: 20,
   centeredSlides: true,
   autoplay: {
     delay: 7500,
     disableOnInteraction: false,
   },
   loop: true,
   breakpoints: {
      0:{
         slidesPerView: 1,
      },
      640:{
         slidesPerView: 2,
      },
      768:{
         slidesPerView: 2,
      },
      1024:{
         slidesPerView: 3,
      },
   },
 });

 
 const loader = document.querySelector('.loader-container');
 setTimeout(function(){
   loader.style.display = "none";
},3000);


class dishesCard {
   constructor(src,name,price,parentSelector,...classes){
      this.src = src
      this.name = name
      this.price = price
      this.parent =document.querySelector(parentSelector)
      this.classes = classes
   }

   render(){
      const element = document.createElement('div')
      if(this.classes.length === 0){
         this.classes = 'box'
         element.classList.add(this.classes)
      }else{
         this.classes.forEach(className => element.classList.add(className))
      }
      element.innerHTML = `
      <div class="box">
         <div class="boxContent">
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
            <img src=${this.src} alt="">
            <h3>${this.name}</h3>
            <div class="stars">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star-half-alt"></i>
            </div>
            <span>${this.price}</span>
            <a href="#" class="btn">add to cart</a>
         </div>
      </div>`;
      this.parent.append(element)
   }
}

new dishesCard(
   'images/dish-1.png',
   'tasty food',
   '$15.99',
   '.dishes .box-container'
).render();
new dishesCard(
   'images/dish-1.png',
   'tasty food',
   '$15.99',
   '.dishes .box-container'
).render();
new dishesCard(
   'images/dish-1.png',
   'tasty food',
   '$15.99',
   '.dishes .box-container'
).render();
new dishesCard(
   'images/dish-1.png',
   'tasty food',
   '$15.99',
   '.dishes .box-container'
).render();
new dishesCard(
   'images/dish-1.png',
   'tasty food',
   '$15.99',
   '.dishes .box-container'
).render();
new dishesCard(
   'images/dish-1.png',
   'tasty food',
   '$15.99',
   '.dishes .box-container'
).render();



// class menuCard {
//    constructor(src,name,price,parentSelector,...classes){
//       this.src = src
//       this.name = name
//       this.price = price
//       this.parent =document.querySelector(parentSelector)
//       this.classes = classes
//    }

//    render(){
//       const element = document.createElement('div')
//       if(this.classes.length === 0){
//          this.classes = 'box'
//          element.classList.add(this.classes)
//       }else{
//          this.classes.forEach(className => element.classList.add(className))
//       }
//       element.innerHTML = `
//       <div class="box">
//          <div class="boxContent">
//             <a href="#" class="fas fa-heart"></a>
//             <a href="#" class="fas fa-eye"></a>
//             <img src=${this.src} alt="">
//             <h3>${this.name}</h3>
//             <div class="stars">
//                <i class="fas fa-star"></i>
//                <i class="fas fa-star"></i>
//                <i class="fas fa-star"></i>
//                <i class="fas fa-star"></i>
//                <i class="fas fa-star-half-alt"></i>
//             </div>
//             <a href="#" class="btn">add to cart</a>
//             <span>${this.price}</span>
//          </div>
//       </div>`;
//       this.parent.append(element)
//    }
// }

// new menuCard(
//    'images/menu-1.jpg',
//    'tasty food',
//    '$15.99',
//    '.menu .box-container'
// ).render();
// new menuCard(
//    'images/menu-2.jpg',
//    'tasty food',
//    '$15.99',
//    '.menu .box-container'
// ).render();
// new menuCard(
//    'images/menu-3.jpg',
//    'tasty food',
//    '$15.99',
//    '.menu .box-container'
// ).render();
// new menuCard(
//    'images/menu-4.jpg',
//    'tasty food',
//    '$15.99',
//    '.menu .box-container'
// ).render();
// new menuCard(
//    'images/menu-5.jpg',
//    'tasty food',
//    '$15.99',
//    '.menu .box-container'
// ).render();
// new menuCard(
//    'images/menu-6.jpg',
//    'tasty food',
//    '$15.99',
//    '.menu .box-container'
// ).render();
// new menuCard(
//    'images/menu-7.jpg',
//    'tasty food',
//    '$15.99',
//    '.menu .box-container'
// ).render();
// new menuCard(
//    'images/menu-8.jpg',
//    'tasty food',
//    '$15.99',
//    '.menu .box-container'
// ).render();
// new menuCard(
//    'images/menu-9.jpg',
//    'tasty food',
//    '$15.99',
//    '.menu .box-container'
// ).render();


});

