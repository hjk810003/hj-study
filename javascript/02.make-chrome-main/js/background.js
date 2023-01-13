const imgs = ['bg1.jpeg', 'bg2.jpeg', 'bg3.jpeg', 'bg4.jpeg'];

const chosenImgs = imgs[Math.floor(Math.random() * imgs.length)]

const bgImgs = document.createElement('img');

bgImgs.src = `img/${chosenImgs}`;
document.body.appendChild(bgImgs);
// prependChild(): body 앞에 추가 
// appendChild(): body 뒤에 추가 