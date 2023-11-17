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


const respuesta = document.querySelector('#respuesta')
const btnok = document.querySelector('#btnok')

btnok.addEventListener('click', () => {
    const input1 = document.querySelector('#uno').value;
    const input2 = document.querySelector('#dos').value;
    const input3 = document.querySelector('#tres').value;

    const suma = Number(input1) + Number(input2) + Number(input3)

    if (suma <= 10) {
        respuesta.innerHTML = 'llevas ' + suma + ' stickers'
    } else {
        respuesta.innerHTML = 'llevas demasiados stickers'
    }
})


// Inicio ejercicio 3

const solucion = document.querySelector('#solucionpass')
const btnverificar = document.querySelector('#btnverificar')

btnverificar.addEventListener('click', () => {
  
const digito1 = document.querySelector('#primero').value
const digito2 = document.querySelector('#segundo').value
const digito3 = document.querySelector('#tercero').value

const password = digito1 + digito2 + digito3

    if (password === '911') {
solucion.innerHTML = 'Password 1 Correcto'
    } else if (password === '714') {
        solucion.innerHTML = 'Password 2 Correcto' 

    } else {
        solucion.innerHTML = 'Password Incorrecto'
    }
})