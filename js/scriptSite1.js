const background = document.querySelector('.bazis');

background.addEventListener('mousemove', function(event) {
    background.style.cssText = `background-position-y: -${0.6*(event.clientY+470)}px;`

});