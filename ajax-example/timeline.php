<?php
session_start();
define("LOGIN_SESSION_KEY", "logged_in");
if (
    isset($_SESSION[LOGIN_SESSION_KEY]) &&
    $_SESSION[LOGIN_SESSION_KEY] != true
) {
    //redirect
    header("Location: ajax-example/index.php");
    die();
}
?>

<html>

<head>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>

<body>
    <button id="refresh_button">Refresh</button>
    <ul id="ul_items">

    </ul>
</body>
<script>
    $("#refresh_button").click(function() {
        fetchData();
    });
    $(document).ready(function() {
        fetchData();
    });

    function fetchData() {
        $("#ul_items").html("");
        $.get("/ajax-example/timeline_ajax.php", function(response) {
            for (let i = 0; i < response.data.length; i++) {
                $("#ul_items").append("<li>" + response.data[i] + "</li>");
            }
        });
    }
</script>

</html>