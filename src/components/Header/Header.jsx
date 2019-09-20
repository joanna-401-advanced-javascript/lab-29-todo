import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <>
      <nav>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/code">Code</Link> </li>
          <li> <a href="/about" >About Us</a></li>
        </ul>
      </nav>
    </>
  );
}

