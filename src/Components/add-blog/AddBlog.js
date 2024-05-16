import React, { useState } from 'react';
import axios from 'axios';

function AddBlog() {
  const [blogData, setBlogData] = useState({
    title: '',
    heading: '',
    description: '',
    author: ''
  });

  const [blogs, setBlogs] = useState([]); // Initialize an empty array for blogs

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080/blog', blogData);
      console.log('Blog added successfully');

      // Fetch the updated list of blogs after adding a new one
      const response = await axios.get('http://localhost:8080/blog');
      setBlogs(response.data); // Update the list of blogs

      // Clear the form after successful submission
      setBlogData({
        title: '',
        heading: '',
        description: '',
        author: ''
      });
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogData({ ...blogData, [name]: value });
  };

  return (
    <div>
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={blogData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Heading:</label>
          <input type="text" name="heading" value={blogData.heading} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={blogData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" name="author" value={blogData.author} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddBlog;
