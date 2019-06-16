let weatherappid = '6ea4f12c5bb4d0e064e83726738ce83d';
let unit = 'imperial';
let searchmethod;

function searchWeather(inputcontent) {
    definSearchMethod(inputcontent);
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchmethod}=${inputcontent}&appid=${weatherappid}&units=${unit}`).then(result => {
        return result.json();
    }).then(result => {
        printout(result);
    })
}

function printout(serverinfo) {
    let weatherstatus = serverinfo.weather[0];
    console.log(typeof(status));
    switch (serverinfo.weather[0].main) {
        case 'Clouds':
            document.body.style.backgroundImage = "url('./image/cloud.jpg')";
            break;
        case 'Clear':
            document.body.style.backgroundImage = "url('./image/clear.png')";
            break;
        case 'Thunderstorm':
            document.body.style.backgroundImage = "url('./image/thunderstorm.jpg')";
            break;
        case 'Snow':
            document.body.style.backgroundImage = "url('./image/Snow.jpg')";
            break;
        case 'Rain':
            document.body.style.backgroundImage = "url('./image/rainy.png')";
            break;
        default:
            break;
    }
    console.log(serverinfo);
    let cityname= document.getElementById('cityName');
    let temperture = document.getElementById('temperture');
    let description = document.getElementById('weatherdescriptionheader');
    let icon = document.getElementById('weathericon');
    let wind= document.getElementById('wind');
    let huminity = document.getElementById('huminity');
    let weathercontainer = document.getElementById('weathercontain');
    cityname.innerText = serverinfo.name;
    temperture.innerHTML = Math.floor(serverinfo.main.temp) + " &#176" + " F";
    description.innerHTML = weatherstatus.description.charAt(0).toUpperCase() + weatherstatus.description.slice(1) ;
    icon.src = "http://openweathermap.org/img/w/"+ weatherstatus.icon +".png";
    wind.innerHTML = "Wind Speed: " +  serverinfo.wind.speed + " mps";
    huminity.innerHTML = "Humidity: " + serverinfo.main.humidity + " %";
    weathercontainer.style.visibility = 'visible';
}

document.getElementById('searchbtn').addEventListener('click', function () {
    let inputvalue = document.getElementById('search-input').value;
    if (inputvalue) {
        searchWeather(inputvalue);
    }
})


function definSearchMethod(inputvalue) {
    if (inputvalue.length === 5 && isNaN(inputvalue) === false) {
        searchmethod = 'zip';
    } else {
        searchmethod = 'q';
    }
}