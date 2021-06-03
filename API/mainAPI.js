 /*
 fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
.then(quote => console.log(quote))*/

var imgp = document.querySelector('#img-perro')
function mostrarPerro(){
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
    imgp.src = data.message
})
}


//var boton = document.getElementById('btn')

var imgp = document.querySelector('#img-perro')


var boton = document.querySelector('#btn')
boton.addEventListener('click', mostrarPerro)