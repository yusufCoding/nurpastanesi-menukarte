<?php
session_start();
require __DIR__ . "/_cors.php";
// CORS (lokal für Vite)
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

// Preflight sofort ok beantworten
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(204);
  exit;
}

$raw = file_get_contents("php://input");
$body = json_decode($raw, true);
$pass = $body["password"] ?? "";

$ADMIN_PASS = "123456";

if (hash_equals($ADMIN_PASS, $pass)) {
  $_SESSION["admin"] = true;
  echo json_encode(["ok" => true]);
} else {
  http_response_code(401);
  echo json_encode(["ok" => false, "error" => "invalid_credentials"]);
}
