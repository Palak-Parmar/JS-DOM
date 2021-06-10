// DOM - query selectors 

// console.log(document.querySelector('p'));
// console.log(document.querySelector('.error'));
// console.log(document.querySelector('div.error'));

// const paras=document.querySelectorAll('p');
// paras.forEach(para =>{
//     console.log(para);
// });

// const errors= document.querySelectorAll('.error'); //we get nodelist as result
// console.log(errors);

// //Other ways to query DOM 


// //cant use forEach method in this (in html collection)
// console.log(document.getElementById('id1'));
// console.log(document.getElementsByClassName('error'));  //we get html collections as result
// console.log(document.getElementsByTagName('h1'));
// console.log(errors[0]);

// //how we can change text ot html inside pages 


// console.log("hello");
// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = 'ninjas bro';
// console.log(para);

// const paras2= document. querySelectorAll('p');
// paras2.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += 'new';
// });

// //what if i want to change the html of this

// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML= '<h2>This is h2</h2>'

// // example:

// const bros =['mihika', 'sarthak', 'etc'];
// bros.forEach(bro=>{
//     content.innerHTML += `<p>${bro}</p>`;
//     console.log(content);
// });

// //Getting and setting 

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// console.log(link.setAttribute('href', 'www.udemy.com'));
// link.innerHTML="net ninja";
// link.setAttribute('style', 'color:red');

//Example 
//add and remove classes

// const first = document.querySelector('p');
// console.log(first.classList);
// first.classList.add('first');
// first.classList.remove('succ');

//51

// const acti = document.querySelectorAll('p');
// acti.forEach(p=>{
// if(p.textContent.includes('error'))
// {
//     p.classList.add('error');
// }  
// if(p.innerText.includes('success'))
// {
//     p.classList.add('success');
// }
// });

// //toggle classes

// const title=document.querySelector('.title');
// title.classList.toggle('text');


//parent, children and siblings

// const article= document.querySelector('article');
// console.log(article.children);
// console.log(Array.from(article.children));
// Array.from(article.children).forEach(child => {
//            child.classList.add('article-element');
//     });
// const title= document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// //chaining:

// console.log(title.parentElement.nextElementSibling.children);
// console.log(title.nextElementSibling.parentElement.children);


// //event basics (click events)

// const button = document.querySelector('button');
// button.addEventListener('click', () =>{
// console.log("this event happened");
// });

// const items= document.querySelectorAll('li');
// items.forEach(item=>{
//    item.addEventListener('click', (e)=>{
//        console.log(e.target);
//        console.log(e.target.innerHTML);
//        console.log("this is event li");
//        e.stopPropagation();
//        e.target.style.textDecoration= "line-through";
//        e.target.remove();
//    });
// });

// //creating and removing items
 
// const ul=document.querySelector('ul');
// ul.addEventListener('click',(e)=>{
//    console.log("this is event ul")
// });

// const button = document.querySelector('button');
// button.addEventListener('click', () =>{
//     const li=document.createElement('li');
//     li.textContent='something new';
//     ul.append(li);
// });


//more dom evnets 

// const copy= document.querySelector('.copy-me');
// copy.addEventListener('copy' ,() =>
// {
//     console.log("oi, my content is being copied");
// });

// const box= document.querySelector('.box');
// box.addEventListener('mousemove', e=>{
// //    console.log(e);
// // console.log(e.offsetX, e.offsetY);
//    box.textContent= `x is: ${e.offsetX} and y is :${e.offsetY}`;
// });

// document.addEventListener('wheel', e=>{
//    console.log(e.pageX, e.pageY);
// });

//building a popup

const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close =document.querySelector('.popup-close');
button.addEventListener('click', ()=>{
    popup.style.display='block';
});

popup.addEventListener('click',()=>{
    popup.style.display='none';
});