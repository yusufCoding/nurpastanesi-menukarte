<?php
session_start();
require __DIR__ . "/_cors.php";
header("Content-Type: application/json; charset=utf-8");

if (!isset($_SESSION["admin"]) || $_SESSION["admin"] !== true) {
  http_response_code(401);
  echo json_encode(["ok" => false]);
  exit;
}

$uploadDir = __DIR__ . "/../../uploads";
$baseDir = preg_replace('#/api/admin$#', '', rtrim(str_replace('\\','/', dirname($_SERVER['SCRIPT_NAME'] ?? "")), '/'));

$files = [];

if (is_dir($uploadDir)) {
  foreach (scandir($uploadDir) as $f) {
    if ($f === "." || $f === "..") continue;
    if (!is_file($uploadDir . "/" . $f)) continue;
    $files[] = $baseDir . "/uploads/" . $f;
  }
}

echo json_encode([
  "ok" => true,
  "files" => $files
]);