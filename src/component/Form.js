import React, { useContext, useEffect, useRef, useState } from 'react';

import {UserContext} from '../App'
const Form = () => {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    const user = useContext(UserContext)
    const handleOnChange = (e) =>{
        setName(e.target.value)
      }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if(name){
            alert(`You have enter : ${name}`);
        }
        else{
            alert(`Please enter Something`);
        }
    }

    useEffect(() => {
        setTimeout(() => {
          setCount((c) => count + 1);
        }, 1000);
      },[]);
      // console.log(count);

      const refEle = useRef('hi');
      console.log(refEle);

  return (
    <div>
        {count}
        <form onSubmit={handleSubmit}>
            <label>Enter Something:
              <input type="text" value={name} // onChange={(e) => setName(e.target.value)}  
              onChange={handleOnChange}/>
            </label>
            <input type="submit" />
        </form>
        <div>{name}</div><p>{user.name}</p>
    </div>
  );
}

export default Form;
