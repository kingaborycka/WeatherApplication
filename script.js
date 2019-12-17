//API 

function  chartdata() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET','dane.json',true);
    xhr.onload = function(){
                
        //konwersja tekstu Json na obiekty javaScript
        responseObject = JSON.parse(xhr.responseText); 
            

                
    };

    xhr.send(null);

