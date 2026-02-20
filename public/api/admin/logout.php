<?php
session_start();
require __DIR__ . "/_cors.php";
header('Content-Type: application/json; charset=utf-8');
session_destroy();
echo json_encode(["ok" => true]);
