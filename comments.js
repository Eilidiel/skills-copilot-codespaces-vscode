// Create web server
const express = require('express');
const app = express();

// Set view engine
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static('public'));

// Create a route
app.get('/', (req, res) => {
  res.render('home');
});

// Create a route
app.get('/comments', (req, res) => {
  const comments = [
    {
      username: 'Todd',
      comment: 'lol so funny'
    },
    {
      username: 'Skyler',
      comment: 'I like turtles'
    },
    {
      username: 'Sk8erBoi',
      comment: 'Plz delete your account, Todd'
    },
    {
      username: 'onlysayswoof',
      comment: 'woof woof woof'
    }
  ];
  res.render('comments', { comments });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});