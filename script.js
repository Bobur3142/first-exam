const menuBars = document.querySelector(".bars");
const menuSade = document.querySelector("aside");
const menuExit = document.querySelector(".exit");


menuBars.addEventListener('click', () => {
    menuSade.style.display = 'block';
    menuBars.style.display = 'none';
    menuExit.style.display = 'block';
})

menuExit.addEventListener('click', () => {
    menuSade.style.display = 'none';
    menuBars.style.display = 'block';
    menuExit.style.display = 'none';
})

