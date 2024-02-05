import './App.css';
import { createContext, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import Usecontext from './component/Usecontext';
import { Route, Routes } from 'react-router-dom';
import { Car } from './component/Car';
import Form from './component/Form';
import Context from './component/Context';
import Navigate from './Navigate'; 

export const UserContext = createContext();

function App() {
  const [name, setName] = useState('Maheswar');

  const [counter, setCounter]  = useState(12)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    if(counter < 20){
      setCounter(prevCounter => prevCounter + 1)
    }
    
  }

  const removeValue = () => {
    if (counter > 0 ){
    setCounter(counter - 1)
    }
  }
  
  // return (
  //   <>
  //     <h1>Chai aur react</h1>
  //     <h2>Counter value: {counter}</h2>

  //     <button
  //     onClick={addValue}
  //     >Add value {counter}</button> 
  //     <br />
  //     <button
  //     onClick={removeValue}
  //     >remove value {counter}</button>
  //     <p>footer: {counter}</p>
  //   </>
  // )
  return (
    <>

    <Context/> 
      <div className="App">
        <header className="App-header">
          <Navigate/>
          <UserContext.Provider value={{name, setName}}>
            <Routes>
              <Route path="*" element={<h1 className="text-center">404 Not Found</h1>}/>
              <Route index element={<Car />} />
              <Route path="/" Component={Navigate}/>
              <Route path="/form" Component={Form}/>
              <Route path="/car" Component={Car}/>
              <Route path="/Usecontext" Component={Usecontext}/>
              <Route path="/context" Component={Context}/>
            </Routes> 
          </UserContext.Provider>
        </header>
      </div>
    </>
  );
}


export default App;


