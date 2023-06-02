// Fetch blog data
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    // Display blog posts
    const blogContainer = document.getElementById('blog-container');
    data.forEach(blog => {
      const blogElement = createBlogElement(blog);
      blogContainer.appendChild(blogElement);
    });

    // Attach delete event listeners
    const deleteButtons = document.getElementsByClassName('delete-btn');
    Array.from(deleteButtons).forEach(button => {
      button.addEventListener('click', deleteBlog);
    });
  })
  .catch(error => console.log(error));

// Create blog element
function createBlogElement(blog) {
  const blogElement = document.createElement('div');
  blogElement.innerHTML = `
    <h2>${blog.title}</h2>
    <p>${blog.body}</p>
    <button class="delete-btn" data-id="${blog.id}">Delete</button>
  `;
  return blogElement;
}

// Handle form submission
const addBlogForm = document.getElementById('add-blog-form');
addBlogForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleInput = document.getElementById('title-input');
  const contentInput = document.getElementById('content-input');

  const newBlog = {
    title: titleInput.value,
    body: contentInput.value,
    userId: 1 // Placeholder user ID
  };

  // Send POST request to add new blog
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBlog)
  })
    .then(response => response.json())
    .then(data => {
      // Display the newly added blog
      const blogContainer = document.getElementById('blog-container');
      const blogElement = createBlogElement(data);
      blogContainer.appendChild(blogElement);

      // Reset form inputs
      titleInput.value = '';
      contentInput.value = '';
    })
    .catch(error => console.log(error));
});

// Delete blog
function deleteBlog() {
  const blogId = this.getAttribute('data-id');

  // Send DELETE request to remove blog
  fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(() => {
      // Remove blog from UI
      const blogContainer = document.getElementById('blog-container');
      const blogElement = this.parentNode;
      blogContainer.removeChild(blogElement);
    })
    .catch(error => console.log(error));
}
