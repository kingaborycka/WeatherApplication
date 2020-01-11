var temp_button1 = 1;
var rain_button1 = 0;
var temp_button2 = 1;
var rain_button2 = 0;
//API 
var city_ids = ["6619279","5128638","3451189","6455259","1796236"] 
var current_id = "6619279"
var krakow_id = "3094802"
document.getElementsByClassName("country_name")[0].onclick = function() {
    document.getElementById("cityName").innerHTML = this.innerHTML
    current_id = city_ids[0]
    $('body').css("background-image","url('../Zdjecia/1.jpg')")
    chartdata()
    
}
document.getElementsByClassName("country_name")[1].onclick = function() {
    document.getElementById("cityName").innerHTML = this.innerHTML
    current_id = city_ids[1];
    $('body').css("background-image","url('../Zdjecia/2.jpg')")
    $('body').css("background-image","hidden")
    chartdata()
}
document.getElementsByClassName("country_name")[2].onclick = function() {
    document.getElementById("cityName").innerHTML = this.innerHTML
    current_id = city_ids[2]
    $('body').css("background-image","url('../Zdjecia/3.jpg')")
    chartdata()
}
document.getElementsByClassName("country_name")[3].onclick = function() {
    document.getElementById("cityName").innerHTML = this.innerHTML
    current_id = city_ids[3]
    $('body').css("background-image","url('../Zdjecia/4.jpg')")
    chartdata()
}
document.getElementsByClassName("country_name")[4].onclick = function() {
    document.getElementById("cityName").innerHTML = this.innerHTML
    current_id = city_ids[4]
    $('body').css("background-image","url('../Zdjecia/5.jpg')")
    chartdata()
};
//szansa opadów
$('#rain2').click(function(){
    temp_button2 = 0;
    rain_button2 = 1;
    chartdata();
});
$('#temperature2').click(function(){
    temp_button2 = 1;
    rain_button2 = 0;
    chartdata();
});
$('#rain1').click(function(){
    temp_button1 = 0;
    rain_button1 = 1;
    chartdatakrakow();
});
$('#temperature1').click(function(){
    temp_button1 = 1;
    rain_button1 = 0;
    chartdatakrakow();
});
chartdata();
chartdatakrakow();


function  chartdatakrakow() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=3094802&APPID=531f22778d8dec93c4f283113edb022c");
    xhr.onreadystatechange = function(){
        var date = [];
        var hours = [];
        var temp = [];
        var icon_id = [];
        var rain = [];

        data(this,date,hours,temp,icon_id,rain);
        if(temp_button1==1 && rain_button1==0){chart1temp(hours,temp);}else{chart1rain(hours,rain)};
        document.getElementById("weather_icon1").src = "http://openweathermap.org/img/wn/"+icon_id[0]+"@2x.png"

    };
    xhr.send(null);
};

function  chartdata() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id="+current_id+"&APPID=531f22778d8dec93c4f283113edb022c");
    xhr.onreadystatechange = function(){
        var date = [];
        var hours = [];
        var temp = [];
        var icon_id = [];
        var rain = [];
        data(this,date,hours,temp,icon_id,rain);
        if(temp_button2==1 && rain_button2==0){chart2temp(hours,temp);}else{chart2rain(hours,rain)};
        document.getElementById("weather_icon").src = "http://openweathermap.org/img/wn/"+icon_id[0]+"@2x.png"
    
    };
    xhr.send(null);
};


function data(x,d,h,t,ic,r){            
    //konwersja tekstu Json na obiekty javaScript
    responseObject = JSON.parse(x.responseText);
    var lista = responseObject.list;
    //pobieranie danych potrzebnych do wykresu
    for(var i=0;i<9;i++){
        d.push(/\d\d\d\d-\d\d-\d\d/.exec(lista[i].dt_txt)[0]);
        h.push(/\d\d:\d\d/.exec(lista[i].dt_txt)[0]); 
        t.push((lista[i].main.temp-273.15).toFixed(2));
        ic.push(lista[i].weather[0].icon);
        if(lista[i].rain != undefined){
            r.push(lista[i].rain["3h"]);
        }else if(lista[i].snow != undefined){
            r.push(lista[i].snow["3h"]);
        }else{
            r.push(0);
        };
        
    };
};
        

// I wykres temperatura krakow
function chart1temp(h,t){
    $("canvas#myChart1").remove();
    $("div.chart1").append('<canvas id="myChart1" height="inherit" width="inherit"></canvas>');
    var ctx1 = document.getElementById("myChart1").getContext('2d');
    var LineChart1 = new Chart(ctx1, {
        type: 'line',
        data:{
            labels: h,
            datasets: [{
                label: 'Temperatura',
                data: t,
                backgroundColor: 'rgba(255,255,0, 0.1)',
                borderColor: 'rgb(255, 204, 0)',
                borderWidth: 1,
                
            }]
        },
        
    });
}; 

// I wykres opady krakow 
function chart1rain(h,r){
    $("canvas#myChart1").remove();
    $("div.chart1").append('<canvas id="myChart1" height="inherit" width="inherit"></canvas>');
    var ctx1 = document.getElementById("myChart1").getContext('2d');
    var LineChart1 = new Chart(ctx1, {
        type: 'bar',
        data:{
            labels: h,
            datasets: [{
                label: 'Opady',
                data: r,
                backgroundColor: 'rgba(191, 220, 231)',
                borderColor: 'rgb(59, 80, 121)',
                borderWidth: 1,
                
            }]
        },
        
    });
};
        
// II wykres temperatura
function chart2temp(h,t){
    $("canvas#myChart2").remove();
    $("div.chart2").append('<canvas id="myChart2" height="inherit" width="inherit"></canvas>');
    var ctx2 = document.getElementById("myChart2").getContext('2d');
    var LineChart2 = new Chart(ctx2, {
        type: 'line',
        data:{
            labels: h,
            datasets: [{
                label: 'Temperatura',
                data: t,
                backgroundColor: 'rgba(255,255,0, 0.1)',
                borderColor: 'rgb(255, 204, 0)',
                borderWidth: 1,
                
            }]
        },
        
    });
};
// II wykres opady 
function chart2rain(h,r){
    $("canvas#myChart2").remove();
    $("div.chart2").append('<canvas id="myChart2" height="inherit" width="inherit"></canvas>');
    var ctx2 = document.getElementById("myChart2").getContext('2d');
    var LineChart2 = new Chart(ctx2, {
        type: 'bar',
        data:{
            labels: h,
            datasets: [{
                label: 'Opady',
                data: r,
                backgroundColor: 'rgba(191, 220, 231)',
                borderColor: 'rgb(59, 80, 121)',
                borderWidth: 1,
                
            }]
        },
        
    });
};


