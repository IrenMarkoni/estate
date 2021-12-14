<?php
// Откликаться будет ТОЛЬКО на ajax запросы
if (empty($_SERVER['HTTP_X_REQUESTED_WITH']) || $_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest'){
    header("HTTP/1.0 404 Not Found");
    header("Location: /404");
    //return;
}

// Если в массиве POST нет действия - выход
if (empty($_POST)) {return;}

$message = '';

if (isset($_POST['name'])){
    $name = $_POST['name'];
    $message .="Имя: $name \r\n";
}
if (isset($_POST['phone'])){
    $phone = $_POST['phone'];
    $message .="Телефон: $phone \r\n";
}




$result = mail("iriska885@yandex.ru", "Сообщение из формы сайта Недвижимость", $message); 

if($result === true){
    echo "Done";
}else{
    echo "Error: " . $result;
}
