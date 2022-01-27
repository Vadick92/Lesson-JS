"use strict";

// const box = document.getElementById("box");

// console.log(box);

// const btns = document.getElementsByTagName("button");

// console.log(btns);

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');

// hearts.forEach(item => {
//     console.log(item);
// });

const box = document.getElementById("box"),
    btns = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    wrapper = document.querySelector(".wrapper");

box.style.backgroundColor = 'blue';
box.style.width = '500px';



btns[1].style.borderRadius = '100%';


hearts.forEach(item =>{
    item.style.backgroundColor = 'blue';
});
const div = document.createElement('div');

circles[0].style.cssText = 'background-color: Red';

div.classList.add('black');

wrapper.append(div);
// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);
// circles[0].remove();
// hearts[0].replaceWith(circles[0]);


// wrapper.insertBefore(div, hearts[2]);
// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[0], hearts[0]);
// div.innerHTML =  '<h1>Hello world</h1>';
// div.textContent = 'hello';
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');