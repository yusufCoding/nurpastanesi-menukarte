<?php
session_start();
require __DIR__ . "/_cors.php";
// CORS (lokal für Vite)
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, OPTIONS");
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

$backupDir = __DIR__ . "/../../backups";
$files = glob($backupDir . "/menu-data.backup-*.json");
if (!$files) $files = [];

// neueste zuerst
usort($files, function ($a, $b) {
  return filemtime($b) <=> filemtime($a);
});

$out = array_map(function ($p) {
  return [
    "file" => basename($p),
    "mtime" => filemtime($p),
  ];
}, $files);

echo json_encode(["ok" => true, "backups" => $out]);
