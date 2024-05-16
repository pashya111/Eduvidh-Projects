import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditBlogForm({ match, history }) {
  const [blog, setBlog] = useState({ title: '', heading: '', description: '', author: '' });

  useEffect(() => {
    if (match) { // Check if match is not null
      fetchBlog();
    }
  }, [match]); // Add match to the dependency array

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/blog/title/${match.params.title}`);
      console.log('Fetched blog:', response.data); // Log fetched blog data
      setBlog(response.data);
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/blog/title/${match.params.title}`, blog);
      console.log('Blog updated successfully');
      history.push('/blogs');
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div>
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={blog.title} onChange={handleChange} required readOnly />
        </div>
        <div>
          <label>Heading:</label>
          <input type="text" name="heading" value={blog.heading} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={blog.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" name="author" value={blog.author} onChange={handleChange} required />
        </div>
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
}

export default EditBlogForm;
