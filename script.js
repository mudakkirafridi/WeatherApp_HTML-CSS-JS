const inputbox = document.querySelector(".inputbox");
const btn = document.getElementById("searchbtn");
const img = document.querySelector(".weatherimg");
const temprature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

async function checkweather(city) {
    const apikey = "ea3b4fdf9ee926d9d5f8809198ab81ab";
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    const weatherdata = await fetch(`${url}`).then(response => response.json())
    
    if(weatherdata.cod === '404'){
        return alert("please enter correct city");
    }

    temprature.innerHTML = `${Math.round(weatherdata.main.temp - 273.15)}°C`;
    description.innerHTML = `${weatherdata.weather[0].description}`;
    humidity.innerHTML = `${weatherdata.main.humidity}%`;
    wind.innerHTML = `${weatherdata.wind.speed}`;

    switch(weatherdata.weather.main){
case 'Clouds':
    img.src = "assets/cloud.png"
    break;
case 'Clear':
    img.src = "assets/clear.png"
    break;
case 'Rain':
    img.src = "assets/rain.png"
    break;
case 'Mist':
    img.src = "assets/mist.png"
    break;
case 'Snow':
    img.src = "assets/snow.png"
    }
}
btn.addEventListener("click",()=>{
    checkweather(inputbox.value);
})