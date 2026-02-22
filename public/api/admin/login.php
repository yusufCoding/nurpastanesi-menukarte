<?php
session_start();
require __DIR__ . "/_cors.php";

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(204);
  exit;
}

$body = json_decode(file_get_contents("php://input"), true) ?: [];
$pass = (string)($body["password"] ?? "");

// Secrets laden
$secrets = require __DIR__ . "/_secrets.php";
$hash = $secrets["ADMIN_PASS_HASH"] ?? "";

if ($hash && password_verify($pass, $hash)) {
  // Session härten
  session_regenerate_id(true);
  $_SESSION["admin"] = true;
  $_SESSION["admin_at"] = time();

  echo json_encode(["ok" => true]);
  exit;
}

http_response_code(401);
echo json_encode(["ok" => false, "error" => "invalid_credentials"]);