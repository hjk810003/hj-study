const quotes = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: 'hong'
    },
    {
        quote: 'Consequatur, ipsam.',
        author: 'gil'
    },
    {
        quote: 'Quod illum inventore sapiente quis deleniti aliquid laborum',
        author: 'dong'
    },
    {
        quote: 'delectus esse quae temporibus. Non beatae adipisci autem odit nisi minima veniam!',
        author: 'kim'
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: 'part'
    },
    {
        quote: 'Consequatur, ipsam.',
        author: 'lee'
    },
    {
        quote: 'Quod illum inventore sapiente quis deleniti aliquid laborum',
        author: 'jeon'
    },
    {
        quote: 'delectus esse quae temporibus. Non beatae adipisci autem odit nisi minima veniam!',
        author: 'yoo'
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: 'ann'
    },
    {
        quote: 'Consequatur, ipsam.',
        author: 'bae'
    }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// Math.round() : 반올림
// Math.ceil() : 올림
// Math.floor() : 내림

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
