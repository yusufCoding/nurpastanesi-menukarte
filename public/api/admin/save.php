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

if (!isset($_SESSION["admin"]) || $_SESSION["admin"] !== true) {
  http_response_code(401);
  echo json_encode(["ok" => false, "error" => "unauthorized"]);
  exit;
}

$raw = file_get_contents("php://input");
if (!$raw) {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "empty_body"]);
  exit;
}

$data = json_decode($raw, true);
if (json_last_error() !== JSON_ERROR_NONE) {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "invalid_json"]);
  exit;
}

if (!isset($data["categories"]) || !is_array($data["categories"])) {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "missing_categories"]);
  exit;
}

$target = __DIR__ . "/../../menu-data.json";
$pretty = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
// Backup anlegen (vor dem Überschreiben)
$backupDir = __DIR__ . "/../../backups";
if (!is_dir($backupDir)) {
  @mkdir($backupDir, 0755, true);
}

if (file_exists($target)) {
  $ts = date("Ymd-His");
  $backupFile = $backupDir . "/menu-data.backup-" . $ts . ".json";
  @copy($target, $backupFile);
}

// --- NUR die letzten 20 Backups behalten ---
$files = glob($backupDir . "/menu-data.backup-*.json");
if ($files && count($files) > 20) {
  // nach Datum sortieren (neueste zuerst)
  usort($files, function ($a, $b) {
    return filemtime($b) <=> filemtime($a);
  });

  // alle ab Index 20 löschen
  foreach (array_slice($files, 20) as $old) {
    @unlink($old);
  }
}

if (file_put_contents($target, $pretty) === false) {
  http_response_code(500);
  echo json_encode(["ok" => false, "error" => "write_failed"]);
  exit;
}

echo json_encode(["ok" => true]);
