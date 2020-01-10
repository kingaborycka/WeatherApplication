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
}
chartdata();
chartdatakrakow();

function  chartdata() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id="+current_id+"&APPID=531f22778d8dec93c4f283113edb022c");
    xhr.onreadystatechange = function(){
        var date = [];
        var hours = [];
        var temp = [];
        var icon_id = [];

        data(this,date,hours,temp,icon_id);
        chart_temp(hours,temp);
        
        document.getElementById("weather_icon").src = "http://openweathermap.org/img/wn/"+icon_id[0]+"@2x.png"


        
        
    };
    xhr.send(null);
}
function  chartdatakrakow() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=3094802&APPID=531f22778d8dec93c4f283113edb022c");
    xhr.onreadystatechange = function(){
        var date = [];
        var hours = [];
        var temp = [];
        var icon_id = [];

        data(this,date,hours,temp,icon_id);
        chart_temp1(hours,temp);
        
        document.getElementById("weather_icon1").src = "http://openweathermap.org/img/wn/"+icon_id[0]+"@2x.png"


        
        
    };
    xhr.send(null);
}



function data(x,d,h,t,ic){            
    //konwersja tekstu Json na obiekty javaScript
    responseObject = JSON.parse(x.responseText);
    var lista = responseObject.list;
    //pobieranie danych potrzebnych do wykresu
    for(var i=0;i<9;i++){
        d.push(/\d\d\d\d-\d\d-\d\d/.exec(lista[i].dt_txt)[0]);
        h.push(/\d\d:\d\d/.exec(lista[i].dt_txt)[0]); 
        t.push((lista[i].main.temp-273.15).toFixed(2));
        ic.push(lista[i].weather[0].icon)
    };
};
function chart_temp1(h,t){
    $("canvas#myChart1").remove();
    $("div.chart1").append('<canvas id="myChart1" height="inherit" width="inherit"></canvas>');
    var ctx2 = document.getElementById("myChart1").getContext('2d');
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
function chart_temp(h,t){
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

