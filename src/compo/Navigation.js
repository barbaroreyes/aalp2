import React from 'react';
import {Link} from "react-router-dom"
const Navigation = () => {
  return (
    <div className = 'navigation'>
      <Link to ='/'>Home</Link>
      <Link to ='/projects'>Projects</Link>
    </div>
  );
}

export default Navigation;
