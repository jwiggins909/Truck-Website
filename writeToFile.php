<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $file = $_GET['file'];
    $data = $_GET['data'];

    // Validate and sanitize the input here if needed

    // Open the file in append mode
    $handle = fopen($file, 'a');

    // Write the user information to the file
    fwrite($handle, $data);

    // Close the file
    fclose($handle);
}
?>
