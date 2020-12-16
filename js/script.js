let minutos = 0;
let segundos = 0;
let mili = 0;
let tempo = 10;
let cronometro;
let cronoParado = true;

// Botão Play
function start(){
    if(cronoParado){
        cronoParado = false;
        cronometro = setInterval(() =>{ temp();}, tempo);
    } 
}

// Botão Pause
function pause(){
    cronoParado = true;
    clearInterval(cronometro);
    
}

// Botão Reset
function reset(){
    cronoParado = true;
    clearInterval(cronometro);
    minutos = 0 ;
    segundos = 0;
    mili = 0 ;
    document.getElementById("cron").innerHTML = '00:00.00';
}

// Controlador do Conômetro
function temp(){
    mili++;

    if(mili == 99){
        mili = 0;
        segundos++;
    }else if(segundos == 59){
        segundos = 0;
        minutos++;
    }

    var formato = (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos) + '.' + (mili < 10 ? '0' + mili : mili);

    document.getElementById("cron").innerHTML = formato;

    return formato;
}

