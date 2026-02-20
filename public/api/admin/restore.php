<?php
session_start();
require __DIR__ . "/_cors.php";
// CORS (lokal für Vite)
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(204);
  exit;
}

if (!isset($_SESSION["admin"]) || $_SESSION["admin"] !== true) {
  http_response_code(401);
  echo json_encode(["ok" => false, "error" => "unauthorized"]);
  exit;
}

$raw = file_get_contents("php://input");
$body = json_decode($raw, true);
$file = $body["file"] ?? "";

$backupDir = __DIR__ . "/../../backups";
$target = __DIR__ . "/../../menu-data.json";

// nur Dateiname erlauben (Sicherheit)
$base = basename($file);
$path = $backupDir . "/" . $base;

if (!$base || !file_exists($path)) {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "backup_not_found"]);
  exit;
}

$content = file_get_contents($path);
if ($content === false) {
  http_response_code(500);
  echo json_encode(["ok" => false, "error" => "read_failed"]);
  exit;
}

// Validieren: ist JSON?
$json = json_decode($content, true);
if (json_last_error() !== JSON_ERROR_NONE) {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "backup_invalid_json"]);
  exit;
}

$pretty = json_encode($json, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
if (file_put_contents($target, $pretty) === false) {
  http_response_code(500);
  echo json_encode(["ok" => false, "error" => "write_failed"]);
  exit;
}

echo json_encode(["ok" => true]);
