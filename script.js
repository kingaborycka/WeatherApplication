//API 
var city_ids = ["6619279","5128638","3451189","6455259","1796236"] 
var current_id = "6619279"
document.getElementsByClassName("country_name")[0].onclick = function() {
    document.getElementById("cityName").innerHTML = this.innerHTML
    current_id = city_ids[0]
    chartdata()
}
document.getElementsByClassName("country_name")[1].onclick = function() {
    document.getElementById("cityName").innerHTML = this.innerHTML
    current_id = city_ids[1]
    chartdata()
}
document.getElementsByClassName("country_name")[2].onclick = function() {
    document.getElementById("cityName").innerHTML = this.innerHTML
    current_id = city_ids[2]
    chartdata()
}
document.getElementsByClassName("country_name")[3].onclick = function() {
    document.getElementById("cityName").innerHTML = this.innerHTML
    current_id = city_ids[3]
    chartdata()
}
document.getElementsByClassName("country_name")[4].onclick = function() {
    document.getElementById("cityName").innerHTML = this.innerHTML
    current_id = city_ids[4]
    chartdata()
}
chartdata();


function  chartdata() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id="+current_id+"&APPID=531f22778d8dec93c4f283113edb022c");
    xhr.onreadystatechange = function(){
        var date = [];
        var hours = [];
        var temp = [];
        var icon_id = [];

        data(this,date,hours,temp,icon_id);
        chart2(hours,temp);
        
        document.getElementById("weather_icon").src = "http://openweathermap.org/img/wn/"+icon_id[0]+"@2x.png"


        
        
    };
    xhr.send(null);

  /*function  chartdata() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET','dane.json');
    xhr.onreadystatechange = function(){
        var date = [];
        var hours = [];
        var temp = [];

        data(this,date,hours,temp);
        chart1(hours,temp);
        chart2(hours,temp);


        
        
    };
    xhr.send(null); */


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
    
    // I wykres
    function chart1(h,t){
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
    
    // II wykres
    function chart2(h,t){
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
}
