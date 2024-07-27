document.addEventListener('DOMContentLoaded', () => {
    const clickButtons = document.querySelectorAll('.btn');

    clickButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('active')) {
                button.classList.add('active');
                setTimeout(() => {
                    button.classList.remove('active');
                }, 1000); // Adjust the timeout based on the longest animation duration
            }
        });
    });

    const sparkleButtons = document.querySelectorAll('.sparkle');
    
    sparkleButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle-dot';
            sparkle.style.left = `${e.clientX - rect.left}px`;
            sparkle.style.top = `${e.clientY - rect.top}px`;
            button.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 500); // Adjust sparkle duration as needed
        });
    });

    const hoverButtons = document.querySelectorAll('.btn');

    hoverButtons.forEach(button => {
        button.addEventListener('touchstart', () => {
            button.classList.add('hover');
        });

        button.addEventListener('touchend', () => {
            button.classList.remove('hover');
        });
    });
});
