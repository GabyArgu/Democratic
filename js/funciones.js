function reloj(){
    var hoy = new Date();
    var hr = hoy.getHours();
    var min = hoy.getMinutes();
    var sec = hoy.getSeconds();
    var zona = hoy.getTimezoneOffset()/60;
    if (zona>0) {
        zona = '+' + zona;
    }

    //Agregamos un cero en frente de los números menores a 10
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec + " - UTC" + zona;
    var time = setTimeout(function(){ reloj() }, 500);
}

function checkTime(i){
    if (i < 10){
        i = "0" + i;
    }
    return i;
}