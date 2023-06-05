const express = require('express');
const app = express();

// Endpoint to send 20 posts
app.get('/posts', (req, res) => {
  const posts = generatePosts(20);
  res.json(posts);
});

// Generate sample posts
function generatePosts(num) {
  const posts = [];
  for (let i = 1; i <= num; i++) {
    posts.push({ id: i, title: `Post ${i}`, content: `This is post ${i}` });
  }
  return posts;
}

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
