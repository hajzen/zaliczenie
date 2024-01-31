document.addEventListener("DOMContentLoaded", function(){
    var form = document.getElementById("contact-form");
    var popup = document.getElementById("popup");
    var closeButton = document.querySelector(".close-button");

    form.addEventListener('submit', function(event) {
        // Zatrzymaj standardowe zachowanie formularza (przesłanie formularza)
        event.preventDefault();

        // Wyświetl popup
        popup.style.display = "block";

        // Resetuj pola formularza
        form.reset();

        // Tutaj można dodać kod do wysyłania danych formularza za pomocą AJAX itp.
    });

    // Zamknij popup po kliknięciu na 'X'
    closeButton.onclick = function() {
        popup.style.display = "none";
    };

    // Zamknij popup po kliknięciu poza nim
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    };
});