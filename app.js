//Commands to install: npm install express ejs

const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    const data = { title: 'Home Page', message: 'Welcome to EJS Example!' };
    res.render('index', data); // Render the 'index.ejs' template
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
