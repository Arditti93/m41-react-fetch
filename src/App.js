import React from "react";
import {useState} from 'react'
import Register from "./components/Register";
import ReadUsers from "./components/ReadUsers";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";



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
        <UpdateUser user={user} />
        <DeleteUser user={user} />
      </div>
        : 
        <h2>Please Register</h2>
      }

    </div>
  );
};

export default App;
