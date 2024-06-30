<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Bus Booking</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Student Bus Booking System</h1>
        <form id="book-bus-form">
            <label for="bus-number">Bus Number:</label>
            <input type="text" id="bus-number" name="bus-number" required>
            
            <label for="route">Route:</label>
            <select id="route" name="route" required>
                <option value="Route A">Route A</option>
                <option value="Route B">Route B</option>
                <!-- Add other routes as needed -->
            </select>
            
            <label for="type">Type:</label>
            <select id="type" name="type" required>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
            </select>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <button type="submit">Book Bus</button>
        </form>
    </div>

    <script src="scripts.js"></script>
</body>
</html>
