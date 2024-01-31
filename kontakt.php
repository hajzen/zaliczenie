<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Tutaj można dodać logikę wysyłania wiadomości, np. za pomocą mail()

echo "Wiadomość została wysłana!";
// Przekierowanie po wysłaniu formularza
// header('Location: thank_you_page.html');
}
?>
