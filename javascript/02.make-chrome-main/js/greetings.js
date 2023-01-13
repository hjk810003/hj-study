// 1. variables (var, let, const)
// const a = 5; // 절대 변하지 않은 변수 const
// const b = 2;
// let myName = 'hj'; // 변할 수 있는 변수 let

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log('my name is ' + myName);

// myName = 'hj kim';

// console.log('my new name is ' + myName);



//2. booleans (true, false, null, undefined)
// let amIFAt = true;
// amIFAt = false;
// amIFAt = null; // null: 변수와 값은 있는데 그 값이 비어있음
// let something; // undefined: 변수는 있는데 안에 값이 정의되지않음

// console.log(amIFAt)
// console.log(something)



// 3. array
// const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']; 

// // Get Item from Array
// console.log(daysOfWeek[4]);

// // Add one more day to the Array
// daysOfWeek.push('sun');

// console.log(daysOfWeek);



// 4. objects
// const player = {
//   name: 'hj', // property
//   points: 10,
//   fat: false,
// }

// console.log(player);

// console.log(player.name);
// console.log(player['name']);

// player.points = player.points + 15;
// console.log(player.points);

// player.fat = true;
// console.log(player);

// player.newProperty = 'tomato'
// console.log(player);



// 5. functions
// function sayHello(nameOfPerson, age) { //argument: 받고싶은 값이나 변수를 () 데이터 안에 넣어줌
//   console.log('hello my name is ' + nameOfPerson + 'and i am ' + age);
// }

// sayHello('hj', 10);
// sayHello('eg', 23);
// sayHello('ch', 15);


// function plus(a, b) { 
//   console.log(a + b);
// }
// plus(8, 60);

// function divide(a, b) {
//   console.log(a/b);
// }
// divide(98, 20);


// const player = {
//   name: 'hj',
//   sayHello: function(otherPersonName) {
//     console.log('hello! ' + otherPersonName);
//   }
// }

// console.log(player.name);
// player.sayHello('lynn');
// player.sayHello('eg');



// 6. recap
// const player = {
//     name: "hong",
//     age: 11
// };

// console.log(player);
// player.name = "gil"
// console.log(player);


// function plus(a, b) {
//     console.log(a + b);
// };

// plus(5, 10);
// plus(12121, 5656565);

// function minusFIve(a) { // a는 해당 function 안에서만 정의됨
//     console.log(a - 5);
// };

// minusFIve(5, 10, 22, 50); // argument를 많이 써도 첫번째 argument만 function을 받음


// const calculator = {
//     add: function(a, b) {
//         console.log(a + b);
//     },
//     minus: function(a, b) {
//         console.log(a - b);
//     },
//     times: function(a, b) {
//         console.log(a * b);
//     },
//     devide: function(a, b) {
//         console.log(a / b);
//     },
//     power: function(a, b) {
//         console.log(a ** b);
//     }
// } 

// calculator.add(10, 2)
// calculator.minus(10, 2)
// calculator.times(10, 2)
// calculator.devide(10, 2)
// calculator.power(10, 2)


// 7. returns
// const age = 96;
// function calAge(ageOfForeigner) {
//     ageOfForeigner + 2;
//     return 'hello';
// }

// const krAge = calAge(age);

// console.log(krAge);




/* ////////////////////////////////////////////////////////////////////////////////////////////// */
// javascript on the browser
// const title = document.getElementById('title');

// // console.dir(title)
// title.innerText = 'got you';


// const title = document.querySelector('div.hello:first-child h1');

// console.dir(title);

// function handleTItClick() {
//     console.log('tit was clicked');
//     title.style.color = 'blue';
// };

// function handleMouseenter() {
//     title.innerHTML = 'mouse is here';
// };

// function handleMouseleave() {
//     title.innerHTML = 'mouse is gone';
// };

// function handleWindowResize() {
//     document.body.style.backgroundColor = 'tomato';
// };

// function handleWindowCopy() {
//     alert('copy!');
// };

// function handleWindowOffline() {
//     alert('sos no wifi!');
// };

// function handleWindowOnline() {
//     alert('wifi goood!');
// };

// // title.addEventListener('click', handleTItClick); // handleTItClick() X
// // title.addEventListener('mouseenter', handleMouseenter);
// // title.addEventListener('mouseleave', handleMouseleave);

// title.onclick = handleTItClick;
// title.onmouseenter = handleMouseenter;
// title.onmouseleave = handleMouseleave;

// window.addEventListener('resize', handleWindowResize);
// window.addEventListener('copy', handleWindowCopy);
// window.addEventListener('offline', handleWindowOffline);
// window.addEventListener('online', handleWindowOnline);


// const h1 = document.querySelector('div.hello:first-child h1');

// function handleTItleClick() {
//     const currentColor = h1.style.color;
//     let newColor;

//     if(currentColor === 'blue') {
//         newColor = 'tomato';
//     } else {
//         newColor = 'blue';
//     }
//     h1.style.color = newColor;
// };

// h1.addEventListener('click', handleTItleClick);

// const h1 = document.querySelector('div.hello:first-child h1');

// function handleTItleClick() {
//     // const clickedClass = 'clicked';
//     // if(h1.classList.contains(clickedClass)) {
//     //     h1.classList.remove(clickedClass);
//     // } else {
//     //     h1.classList.add(clickedClass);
//     // }
//     h1.classList.toggle('clicked')
// };

// h1.addEventListener('click', handleTItleClick);


/* ////////////////////////////////////////////////////////////////////////////////////////////// */
// LOGIN
// const loginForm = document.querySelector('#login-form')
const loginForm = document.getElementById('login-form');
const loginInput = document.querySelector('#login-form input');
const link = document.querySelector('a');
const greeting = document.querySelector('#greeting');

// string이 반복될 경우 아래와 같이 변수로 지정
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //localStorage: 미니 DB

    paintGreetings(username);
}

function paintGreetings(username) {
    // greeting.innerHTML = 'Hello ' + username;
    greeting.innerHTML = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

/* localStorage가 비어있으면 form 보여주고
   localStorage에 유저 정보가 있으면 form 없애고 h1만 보이도록 */
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);
}


loginForm.addEventListener('submit', onLoginSubmit);
// link.addEventListener('click', handleLinkClick);


function handleLinkClick (event) {
    event.preventDefault();
    // console.dir(event);
}


