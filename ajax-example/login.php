<?php
    if($_SERVER['REQUEST_METHOD'] != 'POST'){
        echo "error";
        die();
    }

    $username = $_POST['username'];
    $password = $_POST['password'];

    $adminUsername = "admin";
    $adminPassword = "admin";

    $response = [
        'success' => false,
        'message' => 'The username and password doesn\'t match'
    ];

    header('Content-Type: application/json');

    if($username == $adminUsername && $password == $adminPassword){
        $response['success'] = true;
        $response['message'] = 'Welcome...';
        echo json_encode($response);
    }else {
        echo json_encode($response);
    }
?>