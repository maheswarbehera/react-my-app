import React, { useContext } from 'react';
import {UserContext} from '../App'

const Usecontext = () => {
    const user = useContext(UserContext)
  return (
    <div>
      <label>Your name:</label>
        <input type='text' onChange={e => user.setName(e.target.value)} />
        <p>{user.name}</p>
    </div>
  );
}

export default Usecontext;
