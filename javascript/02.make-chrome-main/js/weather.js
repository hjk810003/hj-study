const API_KEY = "8b9aa46bf0505ed204db4719feb1cd3a";

function onGeoOk(position) {
    // console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
            weather.innerHTML = `${data.weather[0].main} / ${parseInt(data.main.temp)} &#8451;`;
            city.innerHTML = data.name;
        });
}


function onGeoError() {
    alert("Can't find you. No weather for you");

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);