document.addEventListener('DOMContentLoaded', () => {

    const startDate = new Date('2019-03-06T20:00:00'); 

    const revealButton = document.getElementById('revealButton');
    const initialScreen = document.getElementById('initial-screen');
    const mainContent = document.getElementById('main-content');
    const counterElement = document.getElementById('counter');
    

    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const heartsContainer = document.getElementById('hearts-container');
    let currentSlideIndex = 0;

    function updateCounter() {
        const now = new Date();
        const difference = now - startDate;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        counterElement.innerHTML = `${days} dias, ${hours} horas, <br>${minutes} minutos e ${seconds} segundos`;
    }

    function showNextSlide() {
        if (carouselSlides.length === 0) return; 
        carouselSlides[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (currentSlideIndex + 1) % carouselSlides.length;
        carouselSlides[currentSlideIndex].classList.add('active');
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 95 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.innerText = '❤️';
        heartsContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }

    revealButton.addEventListener('click', () => {
        initialScreen.style.display = 'none';
        mainContent.style.display = 'flex';

        // Inicia o contador de tempo
        setInterval(updateCounter, 1000);
        updateCounter();

        // Inicia o carrossel de fotos
        setInterval(showNextSlide, 4000);

        // Inicia a criação de corações
        setInterval(createHeart, 500);
    });
});