<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html', true, 303);
    exit;
}

function h($value) {
    return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$company = trim($_POST['company'] ?? '');
$industry = trim($_POST['industry'] ?? '');
$message = trim($_POST['message'] ?? '');
$honeypot = trim($_POST['website'] ?? '');

if ($honeypot !== '') {
    header('Location: index.html', true, 303);
    exit;
}

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: index.html', true, 303);
    exit;
}

$to = 'info@openv.co.za';
$subject = 'Website enquiry from ' . $name;
$headers = [
    'From: Open V Business Solutions <info@openv.co.za>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion()
];

$body = "Name: " . h($name) . "\n";
$body .= "Email: " . h($email) . "\n";
$body .= "Company: " . h($company !== '' ? $company : '-') . "\n";
$body .= "Industry: " . h($industry !== '' ? $industry : '-') . "\n\n";
$body .= "Message:\n" . h($message !== '' ? $message : '-') . "\n";
$body .= "\n---\nSubmitted via website contact form";

$body = preg_replace('/\r\n?/', "\n", $body);

mail($to, $subject, $body, implode("\r\n", $headers));

header('Location: thank-you.html', true, 303);
exit;
