const button = document.querySelector("button");

button.addEventListener("click", function() {
    alert("Thanks for contacting me!");
});

// Add smooth scrolling to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('Welcome to Ibrahim\'s website! 🚀');
