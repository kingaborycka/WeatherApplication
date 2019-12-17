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

function  chartdata() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET','dane.json',true);
    xhr.onload = function(){
                
        //konwersja tekstu Json na obiekty javaScript
        responseObject = JSON.parse(xhr.responseText); 
            

                
    };

    xhr.send(null);
}