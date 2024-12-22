
const images = [
    'images/capture1.png',
    'images/capture2.png',
    'images/capture3.png',
];

let currentIndex = 0; 


function changeImage(direction) {

    currentIndex += direction;

    
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

   
    document.querySelector('.hero-image').src = images[currentIndex];
}
  // Funkcija za promjenu teme
  function toggleTheme() {
    // Provjeri koja je trenutno aktivna tema
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Inicijalizacija teme na temelju spremljenih postavki u localStorage
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
};

// Dodaj event listener za dugme za promjenu teme
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);