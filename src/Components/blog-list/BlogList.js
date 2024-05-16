import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/blog');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/blog/${id}`);
      console.log('Blog deleted successfully');

      // After deleting the blog, update the list of blogs
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div>
      <h2>All Blogs</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h3>TITLE: {blog.title}</h3>
            <p>Heading: {blog.heading}</p>
            <p>Description: {blog.description}</p>
            <p>Author: {blog.author}</p>
            <p>Posted Date: {blog.postedDate}</p>
            <div>
              <Link to={`/edit/${blog.title}`}>Edit</Link> {/* Link to EditBlogForm */}
              <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
