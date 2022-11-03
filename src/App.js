import React from "react";
import {useState, useEffect} from 'react'
// import Register from "./components/Register";
import ReadUsers from "./components/ReadUsers";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import Login from "./components/Login";

import { getCookie } from "./common";
import {findUser} from "./utils"



const App = () => {
  const [user, setUser] = useState()

  useEffect(() =>{
    let cookie = getCookie('jwt_token')
    if (cookie !== false) {
      loginWithToken(cookie)
    }
  },[])

  const loginWithToken = async(cookie)=> {
    const user = await findUser(cookie)
    setUser(user)
  }

  return (
    <div>

      <h1>Login</h1> 
      <Login setter={setUser}/>
      {user ?
      <div>
        <h2> Hello! welcome {user} you have logged in!</h2>
        <ReadUsers />
        <UpdateUser user={user} />
        <DeleteUser user={user} />
      </div>
        : 
        <h2>Please Login</h2>
      }

    </div>
  );
};

export default App;
