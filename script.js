//API 

document.getElementsByClassName("country_name")[0].onclick = function() {
    document.getElementById("cityName").innerHTML = this.innerHTML
}
document.getElementsByClassName("country_name")[1].onclick = function() {
    document.getElementById("cityName").innerHTML = this.innerHTML
}
document.getElementsByClassName("country_name")[2].onclick = function() {
    document.getElementById("cityName").innerHTML = this.innerHTML
}
document.getElementsByClassName("country_name")[3].onclick = function() {
    document.getElementById("cityName").innerHTML = this.innerHTML
}
document.getElementsByClassName("country_name")[4].onclick = function() {
    document.getElementById("cityName").innerHTML = this.innerHTML
}
chartdata();

function  chartdata() {
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
    xhr.send(null);


    function data(x,d,h,t){            
        //konwersja tekstu Json na obiekty javaScript
        responseObject = JSON.parse(x.responseText);
        var lista = responseObject.list;
        //pobieranie danych potrzebnych do wykresu
        for(var i=0;i<9;i++){
            d.push(/\d\d\d\d-\d\d-\d\d/.exec(lista[i].dt_txt)[0]);
            h.push(/\d\d:\d\d/.exec(lista[i].dt_txt)[0]); 
            t.push((lista[i].main.temp-273.15).toFixed(2));

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
                    borderColor: 'rgba(255,165,0, 0.1)',
                    borderWidth: 1,
                    
                }]
            },
            
            });

    };
    
    // II wykres
    function chart2(h,t){
        var ctx2 = document.getElementById("myChart2").getContext('2d');
        var LineChart2 = new Chart(ctx2, {
            type: 'line',
            data:{
                labels: h,
                datasets: [{
                    label: 'Temperatura',
                    data: t,
                    backgroundColor: 'rgba(255,255,0, 0.1)',
                    borderColor: 'rgba(255,165,0, 0.1)',
                    borderWidth: 1,
                    
                }]
            },
            
            });

    };
}
