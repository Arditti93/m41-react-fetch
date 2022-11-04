import React from "react";
import {useState, useEffect} from 'react'
import ReadUsers from "./components/ReadUsers";
import Login from "./components/Login";

import { getCookie } from "./common";
import {findUser} from "./utils"

const App = () => {
  const [user, setUser] = useState()
  const [photos, setPhotos] = useState([]);

  useEffect(() =>{
    fetchImages();
    let cookie = getCookie('jwt_token')
    if (cookie !== false) {
      loginWithToken(cookie)
    }
  },[])

  const loginWithToken = async(cookie)=> {
    const user = await findUser(cookie)
    setUser(user)
  } 

  const fetchImages = async () => {
    const response = await fetch (`${process.env.REACT_APP_API}`);
    const data = await response.json();
    setPhotos(data);
  }

  return (
    <div>

      <h1>Login</h1> 
      <Login setter={setUser}/>
      {user ?
      <div>
        <h2> Hello! welcome {user} you have logged in!</h2>
        {photos.map((item,index)=>{
          return (
            <div>
              <img alt="random thing" src={item.download_url} width="200"/>
              <h2>{item.author}</h2>
            </div>
          )
        })}
        <ReadUsers />
      </div>
        : 
        <h2>Please Login</h2>
      }

    </div>
  );
};

export default App;

