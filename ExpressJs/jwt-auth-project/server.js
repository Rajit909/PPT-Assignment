const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const secretKey = 'your-secret-key'; // Replace with a secure secret key

app.use(bodyParser.json());

// Simulated user data (Replace with a database of your choice)
const users = [
  { id: 1, username: 'user1', password: '$2b$10$Ljix2QXrShNDrZsuvhXC7eTgk97JbWfU6YvTce2gU3icpHb0hYGMC' } // password: "password1"
];

// Register a new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully' });
});

// User login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// Protected route - Requires authentication
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Protected route accessed successfully' });
  });
  
  // Middleware for authenticating JWT token
  function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token === null) {
      return res.status(401).json({ error: 'Authentication token not found' });
    }
  
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid token' });
      }
      req.user = user;
      next();
    });
  }
  
  // Start the server
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  