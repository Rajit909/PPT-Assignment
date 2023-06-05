const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse the request body
app.use(bodyParser.json());

// In-memory database (Replace with a database of your choice)
let blogs = [
  { id: 1, title: 'Blog 1', content: 'Content for Blog 1' },
  { id: 2, title: 'Blog 2', content: 'Content for Blog 2' },
  { id: 3, title: 'Blog 3', content: 'Content for Blog 3' }
];

// Get all blogs
app.get('/blogs', (req, res) => {
  res.json(blogs);
});

// Get a specific blog
app.get('/blogs/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const blog = blogs.find((blog) => blog.id === blogId);

  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
});

// Add a new blog
app.post('/blogs', (req, res) => {
  const { title, content } = req.body;
  const newBlog = { id: blogs.length + 1, title, content };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

// Update a blog
app.put('/blogs/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const { title, content } = req.body;
  const blog = blogs.find((blog) => blog.id === blogId);

  if (blog) {
    blog.title = title;
    blog.content = content;
    res.json(blog);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
});

// Delete a blog
app.delete('/blogs/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const index = blogs.findIndex((blog) => blog.id === blogId);

  if (index !== -1) {
    const deletedBlog = blogs.splice(index, 1);
    res.json(deletedBlog[0]);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});