const img1 = document.querySelector('#imgparte1')

/* img1.addEventListener('click', () => {
if (img1 == 'border 0') {
    img1.border.style('solid, red, 2px')
}else {
    img1.border.style(0)
}
}) intente intervenir la imagen directamente, comparando el contenedor en vez del borde
 */ 

img1.addEventListener('click', () => {
    if (img1.style.border === '0px') {
      img1.style.border = '2px solid red';
    } else {
      img1.style.border = '0';
    }
  });

