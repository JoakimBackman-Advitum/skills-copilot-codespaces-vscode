// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Add comments
app.get('/comments', (req, res) => {
  res.send('Comments will be here!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});