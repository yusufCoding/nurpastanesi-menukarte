<?php
// public/api/admin/_cors.php

// Erlaubte Origins (lokal + deine echte Domain)
$allowed_origins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  // LIVE: hier deine Domain eintragen
  "https://nurpastanesi.com",
  "https://www.nurpastanesi.com",
];

$origin = $_SERVER["HTTP_ORIGIN"] ?? "";

// Nur setzen, wenn Origin vorhanden UND in Whitelist
if ($origin && in_array($origin, $allowed_origins, true)) {
  header("Access-Control-Allow-Origin: $origin");
  header("Access-Control-Allow-Credentials: true");
  header("Vary: Origin"); // wichtig bei caches/proxies
}

// Preflight
if (($_SERVER["REQUEST_METHOD"] ?? "") === "OPTIONS") {
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type");
  http_response_code(204);
  exit;
}

header("Content-Type: application/json; charset=utf-8");
