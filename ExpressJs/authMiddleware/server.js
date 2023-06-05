const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse the request body
app.use(bodyParser.json());

// Simulated user data (Replace with your own authentication logic)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

// Authentication middleware
const authenticateUser = (req, res, next) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    req.user = user; // Attach the authenticated user to the request object
    next(); // User is authenticated, proceed to the next middleware or route handler
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

// Route handler to get posts
app.get('/posts', authenticateUser, (req, res) => {
  const posts = [
    { id: 1, title: 'Post 1', content: 'Content for post 1' },
    { id: 2, title: 'Post 2', content: 'Content for post 2' },
    { id: 3, title: 'Post 3', content: 'Content for post 3' }
  ];
  res.json(posts);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
