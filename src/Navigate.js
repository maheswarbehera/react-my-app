import React from 'react';
import { Link } from 'react-router-dom';

const Navigate = () => {
  return (
    <div className='container'>
        <div className="d-flex gap-5">
            <h3><Link to='/'>APP</Link></h3>
            <h3><Link to='/form'>Form</Link></h3>
            <h3><Link to='/car'>Car</Link></h3>
            <h3><Link to='/usecontext'>Use Context</Link></h3>
            <h3><Link to='/context'>Props Drilling</Link></h3>
        </div>      
    </div>
  );
}

export default Navigate;
