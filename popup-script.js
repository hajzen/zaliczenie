document.addEventListener("DOMContentLoaded", function(){
    var popup = document.getElementById("popup");
    var closeButton = document.getElementsByClassName("close-button")[0];

    // Wyświetl popup po załadowaniu strony
    popup.style.display = "block";

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
