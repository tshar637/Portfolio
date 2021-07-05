
// Hamburger Drop-Down menu ---------------------------------------------------

let burgerMenuLocation = document.getElementById('burgerMenuIcon');
let burgerDivLocation = document.getElementById('burgerDropDownMenu')

let burgerOnOrOff = 0;

function burgerMenuToggle () {
    if(burgerOnOrOff === 0) {
        burgerOnOrOff = 1;
        burgerMenuLocation.style.color = 'rgba(255, 255, 255, 0.3)';  
        burgerDivLocation.style.display = 'block';
    } else if(burgerOnOrOff === 1) {
        burgerOnOrOff = 0;
        burgerMenuLocation.style.color = 'white';  
        burgerDivLocation.style.display = 'none';
    };
    

};





burgerMenuLocation.addEventListener('click', burgerMenuToggle);
