import React from "react";
import {useState} from 'react'
import Register from "./components/Register";
import ReadUsers from "./components/ReadUsers";



const App = () => {
  const [user, setUser] = useState()

  return (
    <div>
      <h1>Register</h1> 
      <Register setter={setUser}/>
      {user ?
      <div>
        <h2> Hello! welcome {user}</h2>
        <ReadUsers />
      </div>
        : 
        <h2>Please Register</h2>
      }
    </div>
  );
};

export default App;
