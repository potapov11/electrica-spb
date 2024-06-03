<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$name = $_POST['name'];
$tel = $_POST['tel'];
// $msg = $_POST['msg'];

$title = 'Заявка с сайта';
$body = '<p>Имя: <strong>'.$name.'</strong></p>'.
        '<p>Телефон: <strong>'.$tel.'</strong></p>';
        // '<p>Сообщение: <strong>'.$msg.'</strong></p>';

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = 'UTF-8';
  $mail->SMTPAuth   = true;

  $mail->Host       = 'smtp.yandex.com';
  $mail->Username   = 'volos11223344@yandex.ru';
  $mail->Password   = 'tnmjglvrupswabpd';
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('volos11223344@yandex.ru', 'Заявка с сайта');
  $mail->addAddress('s.potapov11@yandex.ru');

  $mail->isHTML(true); // Устанавливаем флаг, сообщающий, что письмо содержит HTML-разметку
  $mail->Subject = $title;
  $mail->Body = $body;

  $res = $mail->send();

  var_dump($res);
  var_dump($_REQUEST);
  echo ('Сообщение отправлено успешно!');

} catch (Exception $e) {
  header('HTTP/1.1 400 Bad Request');
  echo('Сообщение не было отправлено! Причина ошибки: {$mail->ErrorInfo}');
}
