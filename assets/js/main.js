// Inicio ejercicio 1

const img1 = document.querySelector('#imgparte1')

img1.addEventListener('click', () => {
    if (img1.style.border === '0px') {
        img1.style.border = '2px solid red';
    } else {
        img1.style.border = '0';
    }
});

// Inicio ejercicio 2

const input1 = document.querySelector('#uno').value
const input2 = document.querySelector('#dos').value
const input3 = document.querySelector('#tres').value

const suma = input1+input2+input3

const respuesta = document.querySelector('#respuesta')
const btnok = document.querySelector('#btnok')

btnok.addEventListener('click', () => {
    if(suma>=10) {
respuesta.innerHTML = 'llevas demasiados stickers'
    } else{
respuesta.innerHTML = 'llevas ' + suma + 'stickers'
   }
})

