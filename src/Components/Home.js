import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to Blog App</h2>
      <div>
        <Link to="/add"><button>Add New Blog</button></Link>
        <Link to="/blogs"><button>Show Blogs</button></Link>
      </div>
    </div>
  );
}

export default Home;
