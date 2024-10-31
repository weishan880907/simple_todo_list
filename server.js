// Import modules
const express = require('express');
const path = require('path');

// Create Express app instance
const app = express();

// Set port to 3000
const PORT = 3000;

// // Serve static files
app.use(express.static(path.join(__dirname, 'frontend')));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
