
var row = document.querySelector(".row");
var searchInput = document.getElementById('searchInput');
var cuCity = document.getElementById('cuCity');
 var myHttp = new XMLHttpRequest();
 LocationArr=[];
 currentArr=[];
 forecastArr=[];

 if(searchInput.value==""){
    getLocation();
    }




 function getLocation(){

    myHttp.open('GET',`https://api.weatherapi.com/v1/forecast.json?key=0453b362465e4debb84212920221010&q=cairo&days=3`)
    myHttp.send()
    myHttp.addEventListener('readystatechange',function(){
        if(this.readyState == 4){
            LocationArr=JSON.parse(myHttp.response).location;
            currentArr=JSON.parse(myHttp.response).current;
            forecastArr=JSON.parse(myHttp.response).forecast;
            display()
        }
    })
 }


// console.log(currentArr.length);


 function search(country){

    myHttp.open('GET',`https://api.weatherapi.com/v1/forecast.json?key=0453b362465e4debb84212920221010&q=${country}&days=3`)
    myHttp.send()
    myHttp.addEventListener('readystatechange',function(){
        if(this.readyState == 4){
            LocationArr=JSON.parse(myHttp.response).location;
            currentArr=JSON.parse(myHttp.response).current;
            forecastArr=JSON.parse(myHttp.response).forecast;
            display()
        }
    })
 }





 function display()
{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date();
        let first = weekday[d.getDay()];
        var last = weekday[d.getDay()+1];
        var third = weekday[d.getDay()+2];

        // var curr = new Date; // get current date
        // var first = curr.getDate() ; // First day is the day of the month - the day of the week
        // var last = first + 6; // last day is the first day + 6

        // var firstday = new Date(curr);
        // var lastday = new Date(curr.setDate(last)).toUTCString();





    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const m = new Date();
let name = month[m.getMonth()];



const dh = new Date();
let days = dh.getDate();
var cartona=`
  <!-- day one -->

<div class="col-lg-4 ">
    <div class=" rounded-start overflow-hidden item ">
        <div class="card-header d-flex justify-content-between px-2 align-items-center  ">
            <p class="fw-bolder mt-2">${first}</p>
            <p class="fw-bolder mt-2">${days+ " "+ name}</p>
        </div>
        <div class="card-body px-3 ">
            <p class="mt-3 ">${LocationArr.name}</p>
            <div class="d-flex"><p class="degree">${ currentArr.temp_c}°C</p>
            <img src="https:${currentArr.condition.icon}" class="ms-5"  alt=""></div>
            <p class="text-primary">${currentArr.condition.text}</p>
        </div>
        <div class="card-footer mt-5 ps-2 ">
            <span><img src="image/icon-umberella@2x.png" class="img-icon" alt=""> ${currentArr.wind_degree}%</span>
            <span class="px-3"><img src="image/icon-wind@2x.png" class="img-icon" alt=""> ${currentArr.wind_kph}Km/h</span>
            <span><img src="image/icon-compass@2x.png" alt="" class="img-icon"> ${currentArr.wind_dir}</span>
        </div>
    </div>

</div>
<!-- day two -->
<div class="col-lg-4 ">
    <div class="  overflow-hidden item item-2">
        <div class="card-header-2 d-flex justify-content-center px-2   ">
            <p class="fw-bolder mt-2">${last}</p>
        </div>
        <div class="card-body px-3 text-center ">
            <p class="degree "> <img src="https:${forecastArr.forecastday[1].day.condition.icon}" alt=""></p>
            <p class="fw-bolder deg">${forecastArr.forecastday[1].day.maxtemp_c}°C</p>
            <p class="deg-1">${forecastArr.forecastday[1].day.mintemp_c}°C</p>
            <p class="text-primary">${forecastArr.forecastday[1].day.condition.text}</p>
        </div>

    </div>

</div>
<!-- day three -->

<div class="col-lg-4 ">
    <div class="  overflow-hidden item  rounded-end">
        <div class="card-header-2 d-flex justify-content-center px-2   ">
        <p class="fw-bolder mt-2">${third}</p>

        </div>
        <div class="card-body px-3 text-center ">

            <p class="degree"> <img src="https:${forecastArr.forecastday[2].day.condition.icon}" alt=""></p>
            <p class="fw-bolder deg">${forecastArr.forecastday[2].day.maxtemp_c}°C</p>
            <p class="deg-1" >${forecastArr.forecastday[2].day.mintemp_c}°C</p>
            <p class="text-primary">${forecastArr.forecastday[2].day.condition.text}</p>
        </div>

    </div>

</div>
`;
row.innerHTML=cartona;

    }

    // getLocation();



    var subscribe=document.getElementById("subscribe")
    var done=document.getElementById("done")
    var wrong = document.getElementById("wrong")
    // console.log( done);

    function regex(){
        var regular = /@(gmail|yahoo)\.com$/
       if(regular.test(subscribe.value) == true)
       {
        return true;
       }
       else
       {
        return false;
       }
    }



    function check(){
        if(regex()==true){
            done.classList.remove("d-none")
            wrong.classList.add("d-none")

        }
        else{
            wrong.classList.remove("d-none")
            done.classList.add("d-none")

        }
    }





