<?php

$to = 'maitreeleekha@yahoo.in';

$subject = 'This is a test email';

$message = '<h1> Hello there! </h1>';

$headers .= 'Content-type: text/html\r\n'

mail($to, $subject, $message, $headers);