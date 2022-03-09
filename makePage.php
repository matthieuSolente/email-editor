<?php
if(empty($_POST['filename']) || empty($_POST['content'])){
    exit;
}

// Sanitize du fichier:
$filename = preg_replace('/[^a-z0-9\-\_\.]/i','',$_POST['filename']);

// headers:
header("Cache-Control: ");
header("Content-type: text/plain");
header('Content-Disposition: attachment; filename="'.$filename.'"');

echo $_POST['content'];
?>