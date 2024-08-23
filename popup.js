document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById('popup-message');
    const closeBtn = document.querySelector('.close-btn');
    const body = document.body;

    // Show the popup
    popup.classList.add('show');
    body.classList.add('body-popup-active');

    if (closeBtn) {
        closeBtn.onclick = function() {
            popup.classList.remove('show');
            body.classList.remove('body-popup-active');
        };
    } else {
        console.error('Close button not found');
    }

    window.onclick = function(event) {
        if (event.target === popup) {
            popup.classList.remove('show');
            body.classList.remove('body-popup-active');
        }
    };
});
