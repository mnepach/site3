<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$product = 'Рододедрон';
$price = '17.99 BYN';
$token = "8184422449:AAESGAsPHbu2TwaSYhRIFxbM9RJHLkavCVA";
$chat_id = "-1002622903145";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Товар: ' => $product,
  'Цена: ' => $price
);

$txt = "🛍️Новый заказ:%0A";
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram ) {
  header('Location: good.html');
} else {
  echo "Error";
}

?>