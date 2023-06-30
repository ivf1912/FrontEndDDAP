

const themeButton = document.querySelector('#theme-button');
const body = document.querySelector('body');

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});







//agar foto polaroid ketika ditekan membesar
const polaroids = document.querySelectorAll('.polaroid');

polaroids.forEach(polaroid => {
  polaroid.addEventListener('click', () => {
    if (polaroid.classList.contains('large')) {
      polaroid.classList.remove('large');
    } else {
      polaroids.forEach(p => p.classList.remove('large'));
      polaroid.classList.add('large');
    }
  });
});


// dropdown menu
var dropdownTrigger = document.querySelector('#navbarDropdownMenuLink');
var dropdownMenu = document.querySelector('.dropdown-menu');

dropdownTrigger.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});


//maps bagian bawah
document.getElementById("map-image").addEventListener("click", function() {
  window.open("https://goo.gl/maps/unh3qxLXWfmpg1qF8");
});

