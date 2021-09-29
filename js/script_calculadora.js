function insert (numero){
    const adicional = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = adicional + numero;
}

function clean(){
    document.getElementById('resultado').innerHTML = '';
}

function apagarUM(){
    const resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substr(0, resultado.length -1);
}

function calcular(){
    const resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else{
        document.getElementById('resultado').innerHTML = "";
    }
}