import React from 'react';
import { useState, createContext, useContext } from "react";
// import ReactDOM from "react-dom/client";

function Context() {
  return (
    <div>
      <Component1/>
    </div>
  );
}

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("MAHESWAR");

  return (
    <>
    <UserContext.Provider value={user} >
        <div class="App-header">com-1 
          <h1>Component 1</h1>
          <h1>{`Hello ${user}!`}</h1>
          <Component2 />
        </div>
    </UserContext.Provider>
    </>
  );
}

function Component2() {
    const user = useContext(UserContext);
  return (
    <div style={{color:'orange'}}>
    <h1>com-2</h1>
      <h1>Component 2</h1>
      <h2>{`Hello ${user} again!`}</h2>
      <Component3 />
    </div>
  );
}

function Component3() {
  return (
    <div style={{color:'red'}}><h1>com-3</h1>
      <h1>Component 3</h1>
      <Component4 />
    </div>
  );
}

function Component4() {
  return (
    <div style={{color:'green'}}><h1>com-4</h1>
      <h1>Component 4</h1>
      <Component5 />
    </div>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <div style={{color:'blue'}}><h1>com-5</h1>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  );
}

export default Context;





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1 />);