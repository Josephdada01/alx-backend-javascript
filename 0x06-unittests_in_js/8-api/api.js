const express = require('express');

// Create an instance of express
const app = express();

// Define a route for GET /
app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// Export the app
module.exports = app;

if (require.main === module) {
    const PORT = 7865;
    app.listen(PORT, () => {
        console.log(`API available on localhost port ${PORT}`);
    });
}
