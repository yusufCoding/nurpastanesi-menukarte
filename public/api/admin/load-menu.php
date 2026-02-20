<?php
session_start();
require __DIR__ . "/_cors.php";
// CORS für Vite
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=utf-8");

if (!isset($_SESSION["admin"]) || $_SESSION["admin"] !== true) {
  http_response_code(401);
  echo json_encode(["ok" => false, "error" => "unauthorized"]);
  exit;
}

$path = __DIR__ . "/../../menu-data.json";
if (!file_exists($path)) {
  http_response_code(404);
  echo json_encode(["ok" => false, "error" => "menu_not_found"]);
  exit;
}

echo file_get_contents($path);
