let weatherappid='6ea4f12c5bb4d0e064e83726738ce83d';
let unit ='imperial';
let searchmethod;

function searchWeather(inputcontent){
    definSearchMethod(inputcontent);
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchmethod}=${inputcontent}&appid=${weatherappid}`).then(result =>{
        return result.json();
    }).then(result =>{
        printout(result);
    })
}

function printout(serverinfo){
    alert("thangtran");
    // document.body.style.background = "('clear.png')";     // switch (serverinfo.weather[0].main) {
    //     case 'Clouds':
    //         document.body.style.backgroundImage = "src=('./image/cloud.jpg')";
    //         break;
    //     case 'Clear':
    //         document.body.style.backgroundImage = "src=('clear.png')";
    //             break;
    //     default:
    //         break;
    // }
}

document.getElementById('searchbtn').addEventListener('click', function(){

    let inputvalue = document.getElementById('search-input').value;
    if(inputvalue){
        searchWeather(inputvalue);
    }
})

function definSearchMethod(inputvalue){
    alert(inputvalue);
    if(inputvalue.length === 5 && isNaN(inputvalue) === false){
        searchmethod='zip';
    }else{
        searchmethod='q';
    }
}