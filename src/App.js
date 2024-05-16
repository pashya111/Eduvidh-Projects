import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import AddBlogForm from './Components/add-blog/AddBlog';
import EditBlogForm from './Components/add-blog/EditBlog';
import BlogList from './Components/blog-list/BlogList';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBlogForm />} />
          <Route path="/edit/:title" element={<EditBlogForm />} />
          <Route path="/blogs" element={<BlogList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
