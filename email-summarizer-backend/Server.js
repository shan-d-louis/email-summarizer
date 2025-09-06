const express = require('express')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.get('/auth', (req, res) => {
    res.redirect("http://localhost:5173/success")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});