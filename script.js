const apiKey = 'a1679fc693d9ae8f9c82b2d9c1b10bbf'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')


async function checkWeather (city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()

    console.log(data)

    if (response.status === 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
        
    } else {
        document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ' °C'
    document.querySelector('.humidity').innerHTML = data.main.humidity + ' %'
    document.querySelector('.wind').innerHTML = data.wind.speed.toFixed(1) + ' km/h'
    document.querySelector('.error').style.display = 'none'
    document.querySelector('.weather').style.display = 'block'
    }

    if (data.weather[0].main === 'Clear') {
        document.querySelector('.weather-icon').src = 'images/clear.png'
    } else if (data.weather[0].main === 'Rain') {
        document.querySelector('.weather-icon').src = 'images/rain.png'
    } else if (data.weather[0].main === 'Clouds') {
        document.querySelector('.weather-icon').src = 'images/clouds.png'
    } else if (data.weather[0].main === 'Drizzle') {
        document.querySelector('.weather-icon').src = 'images/drizzle.png'
    } else if (data.weather[0].main === 'Mist') {
        document.querySelector('.weather-icon').src = 'images/mist.png'
    }

    
    
}



searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
    searchBox.value = ''
})

searchBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkWeather(searchBox.value)
        searchBox.value = ''

    }
})

checkWeather()