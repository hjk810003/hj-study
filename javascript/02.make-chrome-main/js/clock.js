const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    //padStart(원하는 글자갯수, '넣고싶은 글자') : string의 앞에 원하는 만큼 글자를 추가 
    const hours = String(date.getHours()).padStart(2, '0'); 
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerHTML = (`${hours}:${minutes}:${seconds}`);
}

// web이 로딩되자마자 getClock()을 실행하고, 매초마다 다시 실행되도록
getClock();
setInterval(getClock, 1000); // 1000ms = 1s
// setTimeout(getClock, 1000);

