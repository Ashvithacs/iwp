<?php
session_start();

// Database connection
$servername = "localhost";
$username = "root"; // Change this to your database username
$password = ""; // Change this to your database password
$database = "login_system"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database if it doesn't exist
$sql_create_db = "CREATE DATABASE IF NOT EXISTS $database";
if ($conn->query($sql_create_db) === FALSE) {
    die("Error creating database: " . $conn->error);
}

// Select the database
$conn->select_db($database);

// Create users table if it doesn't exist
$sql_create_table = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)";
if ($conn->query($sql_create_table) === FALSE) {
    die("Error creating table: " . $conn->error);
}

// Handle login form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Retrieve hashed password from the database based on the provided username
    $sql_select_user = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql_select_user);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $hashed_password = $row["password"];
        
        // Verify password
        if (password_verify($password, $hashed_password)) {
            // Password is correct, login successful
            $_SESSION["username"] = $username;
            header("Location: welcome.php"); // Redirect to welcome page
            exit();
        } else {
            // Password is incorrect
            echo "Invalid password";
        }
    } else {
        // Username not found
        echo "User not found";
    }
}

// Close database connection
$conn->close();
?>
