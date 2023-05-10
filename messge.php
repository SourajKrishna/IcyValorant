<?php

if (isset($_POST['submit'])) {
  $to = "youremail@example.com";
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $subject = "Contact Form Submission";
  
  $body = "Name: $name\nEmail: $email\n\n$message";
  
  if (mail($to, $subject, $body)) {
    echo "<p>Thank you for contacting us!</p>";
  } else {
    echo "<p>There was an error sending your message. Please try again later.</p>";
  }
}

?>
