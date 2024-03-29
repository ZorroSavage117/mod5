const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');

const app = express();
const port = 3000;

// Middleware to ignore favicon requests
app.get('/favicon.ico', (req, res) => {
  res.status(204).end(); // Return empty response with status code 204 (No Content)
});

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route to serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { taskName, schedule } = req.body;
    
    // Schedule the task using node-cron
    const scheduledTask = cron.schedule(schedule, () => {
        // Simulate task execution by logging a message
        console.log(`Task "${taskName}" executed at ${new Date().toLocaleString()}`);
    });

    // Respond with a confirmation message
    res.send(`Task "${taskName}" scheduled successfully.`);
});

// Schedule a test task to run every minute
const testTask = cron.schedule('* * * * *', () => {
    // Log a message indicating that the test task was executed
    console.log('Test task executed at', new Date().toLocaleString());
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
