var botao = document.querySelector('.btn');

botao.addEventListener("click", function () {
    var ipn = document.querySelector('#campo-texto');
    var divResultado = document.querySelector('#divResultado');

    divResultado.innerHTML = ipn.value + "<br />" +  divResultado.innerHTML;
    ipn.value = '';
});

