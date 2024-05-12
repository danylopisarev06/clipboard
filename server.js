const express = require('express');
const path = require('path')
const app = express();
const port = 8000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api/clipboard', (req, res) => {
  const email = req.query.email;
  if (email) {
    console.log(`Email copied: ${email}`);
    res.send(email);
  } else {
    res.status(400).send('Email not provided');
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
