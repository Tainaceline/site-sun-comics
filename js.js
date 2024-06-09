function votar() {
    var a = document.getElementById('mainVOTACAO')
    var b = document.getElementById('botao')
    a.style.display='block'
    b.style.display='none'
}
function escolher() {
    var b = document.getElementsByClassName('porcentagem');
    for (var i = 0; i < b.length; i++) {
        b[i].style.display = 'block';
    }
}