<?php
declare(strict_types=1);

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Location: index.html', true, 303);
    exit;
}

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_COMPANY_LENGTH = 160;
const MAX_INDUSTRY_LENGTH = 80;
const MAX_MESSAGE_LENGTH = 4000;

function redirect_with_error(): void
{
    header('Location: contact-error.html', true, 303);
    exit;
}

function field(string $key, int $maxLength): string
{
    $value = $_POST[$key] ?? '';
    if (!is_string($value)) {
        redirect_with_error();
    }

    $value = trim($value);
    if (strlen($value) > $maxLength) {
        redirect_with_error();
    }

    return $value;
}

function mail_safe(string $value): string
{
    return preg_replace('/[\r\n]+/', ' ', $value) ?? '';
}

function body_safe(string $value): string
{
    return str_replace(["\r\n", "\r"], "\n", $value);
}

$honeypot = field('website', 100);
if ($honeypot !== '') {
    // Treat automated honeypot submissions as accepted by the public endpoint,
    // but do not send or expose an enquiry.
    header('Location: index.html', true, 303);
    exit;
}

$name = field('name', MAX_NAME_LENGTH);
$email = field('email', MAX_EMAIL_LENGTH);
$company = field('company', MAX_COMPANY_LENGTH);
$industry = field('industry', MAX_INDUSTRY_LENGTH);
$message = field('message', MAX_MESSAGE_LENGTH);

if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect_with_error();
}

$name = mail_safe($name);
$email = mail_safe($email);
$company = body_safe($company);
$industry = body_safe($industry);
$message = body_safe($message);

$to = 'info@openv.co.za';
$subject = 'Website enquiry from ' . $name;
$headers = implode("\r\n", [
    'From: Open V Business Solutions <info@openv.co.za>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
]);

$body = "Name: " . $name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Company: " . ($company !== '' ? $company : '-') . "\n";
$body .= "Industry: " . ($industry !== '' ? $industry : '-') . "\n\n";
$body .= "Message:\n" . ($message !== '' ? $message : '-') . "\n";
$body .= "\n---\nSubmitted via website contact form";

// mail() returning true means the configured local mail transport accepted the
// message. It does not guarantee final delivery to the recipient.
$accepted = mail($to, $subject, $body, $headers);
if (!$accepted) {
    redirect_with_error();
}

header('Location: thank-you.html', true, 303);
exit;
