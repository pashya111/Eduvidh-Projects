import React from 'react';
import { Link } from 'react-router-dom';

function BlogListItem({ blog, handleDelete }) {
  return (
    <li>
      <h3>{blog.title}</h3>
      <p><strong>Heading:</strong> {blog.heading}</p>
      <p><strong>Description:</strong> {blog.description}</p>
      <p><strong>Author:</strong> {blog.author}</p>
      <div>
        <Link to={`/edit/${blog.title}`}><button>Edit</button></Link>
        <button onClick={() => handleDelete(blog.title)}>Delete</button>
      </div>
    </li>
  );
}

export default BlogListItem;
