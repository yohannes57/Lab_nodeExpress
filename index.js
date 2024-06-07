// Part 2: Middleware
// Import required modules
const express = require('express');

// Create Express app
const app = express();

// Define custom middleware
const requestLoggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

// Use the middleware for all routes
app.use(requestLoggerMiddleware);

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
