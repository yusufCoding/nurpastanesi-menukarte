<?php
session_start();
require __DIR__ . "/_cors.php";
// CORS für Vite
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

if (!isset($_FILES["file"])) {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "no_file"]);
  exit;
}

$f = $_FILES["file"];
if ($f["error"] !== UPLOAD_ERR_OK) {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "upload_error", "code" => $f["error"]]);
  exit;
}

// MIME check (basic)
$allowed = ["image/jpeg" => "jpg", "image/png" => "png", "image/webp" => "webp"];
$mime = mime_content_type($f["tmp_name"]);
if (!isset($allowed[$mime])) {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "invalid_type", "mime" => $mime]);
  exit;
}

$ext = $allowed[$mime];

// safe filename
$orig = pathinfo($f["name"], PATHINFO_FILENAME);
$orig = preg_replace('/[^a-zA-Z0-9_\- ]+/', '', $orig);
$orig = trim(preg_replace('/\s+/', ' ', $orig));
if ($orig === "") $orig = "image";

// unique name
$ts = date("Ymd-His");
$rand = substr(bin2hex(random_bytes(4)), 0, 8);
$filename = $orig . "-" . $ts . "-" . $rand . "." . $ext;

$uploadDir = __DIR__ . "/../../uploads";
if (!is_dir($uploadDir)) {
  @mkdir($uploadDir, 0755, true);
}

$dest = $uploadDir . "/" . $filename;

if (!move_uploaded_file($f["tmp_name"], $dest)) {
  http_response_code(500);
  echo json_encode(["ok" => false, "error" => "move_failed"]);
  exit;
}

// Das ist die URL, die später im Menü genutzt werden kann
$url = "/uploads/" . $filename;

echo json_encode([
  "ok" => true,
  "url" => $url,
  "filename" => $filename
]);
